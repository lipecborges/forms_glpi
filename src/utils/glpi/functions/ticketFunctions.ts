import { FastifyReply, FastifyRequest } from 'fastify';
import { ticketFollowUp, updateTicket, solTicket } from '../../../services/glpi/ticketsService';
import { generateErrorContentDtEntregAv, generateErrorContentEstornaOp, generateErrorContentIe, generateErrorContentModRegInfo, generateErrorContentOp, generateSuccessContentDtEntregAv, generateSuccessContentEstornaOp, generateSuccessContentIe, generateSuccessContentModRegInfo, generateSuccessContentOp } from '../html/ticketHtml';
import { ticketFollowUpPayload, createSolutionPayload, createSolutionDatePayload, createClosePayload } from '../payloads/ticketPayloads';
import { getApprovalDate } from './getApprovalDate';
import { Type, Error, Content, Alert } from '../../../schemas/glpi/ticketSchema';

// Função auxiliar para enviar resposta
const sendResponse = (res: FastifyReply, result: any) => {
    return res.status(result.status).send(result);
};

// Função auxiliar para verificar erros
const handleError = (res: FastifyReply, result: any, errorStatuses: number[]) => {
    if (errorStatuses.includes(result.status)) {
        return sendResponse(res, result);
    }
    return null; // Continua o fluxo se não houver erro
};

// Gera o conteúdo com base no tipo
export const generateContent = (type: Type, error: Error, content: Content, alert: Alert): string => {
    switch (type) {
        case 'criaOp':
            return error ? generateErrorContentOp(error) : generateSuccessContentOp(content);
        case 'ie':
            return error ? generateErrorContentIe(alert, error) : generateSuccessContentIe(content, alert);
        case 'estornaOp':
            return error ? generateErrorContentEstornaOp(error) : generateSuccessContentEstornaOp(content);
        case 'regInfo':
            return error ? generateErrorContentModRegInfo(error) : generateSuccessContentModRegInfo(content);
        case 'dtentregaav':
            return error ? generateErrorContentDtEntregAv(error) : generateSuccessContentDtEntregAv(content);
        default:
            return '';
    }
};

// Lógica para adicionar acompanhamento
export const handleFollowUp = async (
    res: FastifyReply,
    ticketId: number,
    content: string,
    error: string | undefined,
    alert: string | undefined,
    errorStatuses: number[]
) => {
    const conteudo = generateContent('ie', error, content, alert);
    const followUpPayload = ticketFollowUpPayload(ticketId, conteudo);
    const addAcompanhamento = await ticketFollowUp(followUpPayload);
    return handleError(res, addAcompanhamento, errorStatuses) || sendResponse(res, addAcompanhamento);
};

// Lógica para resolver o ticket
export const handleSolve = async (
    res: FastifyReply,
    ticketId: number,
    conteudo: string,
    errorStatuses: number[]
) => {
    const approvalDate = await getApprovalDate(ticketId);
    const solutionPayload = createSolutionPayload(ticketId, conteudo);
    const solutionDatePayload = createSolutionDatePayload(approvalDate);

    const setApprovalDate = await updateTicket(ticketId, solutionDatePayload);
    if (handleError(res, setApprovalDate, errorStatuses)) return;

    const solutionTicket = await solTicket(solutionPayload);
    return handleError(res, solutionTicket, errorStatuses) || sendResponse(res, solutionTicket);
};

// Lógica para fechar o ticket
export const handleClose = async (
    res: FastifyReply,
    ticketId: number,
    conteudo: string,
    errorStatuses: number[]
) => {
    const approvalDate = await getApprovalDate(ticketId);
    const solutionPayload = createSolutionPayload(ticketId, conteudo);
    const closePayload = createClosePayload();
    const solutionDatePayload = createSolutionDatePayload(approvalDate);

    const setApprovalDate = await updateTicket(ticketId, solutionDatePayload);
    if (handleError(res, setApprovalDate, errorStatuses)) return;

    const solutionTicket = await solTicket(solutionPayload);
    if (handleError(res, solutionTicket, errorStatuses)) return;

    const closeTicket = await updateTicket(ticketId, closePayload);
    return handleError(res, closeTicket, errorStatuses) || sendResponse(res, closeTicket);
};