import { FastifyReply, FastifyRequest, FastifySchema, FastifyTypeProviderDefault, RawServerDefault, RouteGenericInterface } from 'fastify';
import { ticketSchema, TicketSchema, SolTicketSchema, SolicitaValidacaoSchema, AdicionaAcompanhamentoSchema, NewTicketSchema } from '../../schemas/glpi/ticketSchema';
import { SchemaResponse } from '../../schemas/generalSchemas';
import { criarOpParams, ieParams, orderParams, getUserParams, estornaOpParams, modRegInfoParams, newStatusParam, validateParams, testeWPParams, dtEntregaAvParams } from '../../utils/glpi/params/searchParams';
import { searchItems, getUserInfo } from '../../services/glpi/searchService';
import { getApprovalDate } from '../../utils/glpi/functions/getApprovalDate';
import { generateErrorContentOp, generateSuccessContentOp, generateErrorContentIe, generateSuccessContentIe, generateSuccessContentEstornaOp, generateErrorContentEstornaOp, generateSuccessContentModRegInfo, generateErrorContentModRegInfo } from '../../utils/glpi/html/ticketHtml';
import { createSolutionPayload, createClosePayload, createSolutionDatePayload, createRequestValidationPayload, ticketFollowUpPayload, createNewTicketPayload } from '../../utils/glpi/payloads/ticketPayloads';
import { updateTicket, solTicket, reqTicketValidation, validationsTicket, ticketFollowUp, newTicket } from '../../services/glpi/ticketsService';
import { getGroupInfo, getUserGroups } from '../../services/glpi/groupsService';
import type { Ticket } from '../../types/glpi/interfaces';
import { errorStatuses } from '../../utils/constants';
import { getUserByEmail, getUserEmail } from '../../models/glpi/ticketsModel';
import { getGroupIdByName } from '../../models/glpi/groupModel';
import { transformValidations } from '../../utils/glpi/functions/trataValidacoes';
import { TicketValidation } from '../../types/glpi/ticketsTypes';
import { generateContent, handleClose, handleFollowUp, handleSolve } from '../../utils/glpi/functions/ticketFunctions'
import { GrupoId } from '../../types/glpi/ieTypes';
import { verificaValidacaoGrupo } from '../../utils/glpi/functions/validacaoGrupo';

export const getTicketsValidated = async (req: FastifyRequest, res: FastifyReply) => {
    const { type } = req.params as { type?: string };
    console.log('type', type)
    let response: SchemaResponse = { status: 0, message: '' }; // Inicialize a variável response

    let paramsByType = {};
    let needValidate
    const itemType = 'Ticket';

    // Parâmetros padrões de pesquisa
    const defaultParams = newStatusParam();
    // Parâmetros de ordenação
    const order = orderParams();
    // Parâmetros específicos de acordo com o tipo de ticket
    switch (type) {
        case 'criaOp':
            paramsByType = criarOpParams();
            needValidate = validateParams()
            break;
        case 'ie':
            paramsByType = ieParams();
            break;
        case 'estornaOp':
            paramsByType = estornaOpParams();
            break;
        case 'regInfo':
            paramsByType = modRegInfoParams();
            break;
        case 'dtentregaav':
            console.log('entrou no dtentregaav')
            paramsByType = dtEntregaAvParams();
            needValidate = validateParams();
            break;
        default:
            response.status = 400;
            response.message = 'Tipo de ticket inválido';
            return res.status(response.status).send(response);
    }

    const sendParams = { ...defaultParams, ...needValidate, ...paramsByType, ...order };

    const ticketsValidated = await searchItems<Ticket>(itemType, sendParams);

    if (errorStatuses.includes(ticketsValidated.status)) {
        return res.status(ticketsValidated.status).send(ticketsValidated);
    }

    let idRequester: number;
    const ticketId = ticketsValidated.data[0]['2'];

    const requesterData = ticketsValidated.data[0]['4'];

    if (requesterData) {
        if (Array.isArray(requesterData) && requesterData.length > 0) {
            idRequester = parseInt(requesterData[0]);
        } else if (typeof requesterData === 'string' && requesterData.trim().length > 0) {
            idRequester = parseInt(requesterData);
        } else {
            const emailRequester = await getUserEmail(ticketId);
            idRequester = await getUserByEmail(emailRequester);
        }
    } else {
        const emailRequester = await getUserEmail(ticketId);
        idRequester = await getUserByEmail(emailRequester);
    }

    const userParams = getUserParams(idRequester);

    const userInfo = await getUserInfo(userParams);
    if (errorStatuses.includes(userInfo.status)) {
        return res.status(userInfo.status).send(userInfo);
    }

    // Mapeia os dados para o esquema ticketSchema
    const mappedTickets: TicketSchema[] = ticketsValidated.data.map((ticket: Ticket) => ({
        id: ticket['2'],
        subject: ticket['1'],
        category: ticket['7'],
        date_creation: ticket['15'],
        approval_status: ticket['55'],
        status: ticket['12'],
        requester: {
            id: userInfo['2'],
            name: `${userInfo['1']} ${userInfo['34']}`,
            email: userInfo['5'],
            phone: userInfo['6'],
            location: userInfo['3'],
        },
    }));

    // Valida os dados mapeados com o esquema ticketSchema
    const validationResult = ticketSchema.safeParse(mappedTickets);
    //console.log('mappedTickets', mappedTickets)

    console.log('validationResult', validationResult)
    if (!validationResult.success) {
        return res.status(400).send({ error: 'Validation failed', details: validationResult.error.errors });
    }
    return res.status(200).send(validationResult.data);
};

// ENDPOINT PARA SOLUCIONAR e fechar TICKETS
export const solutionTicket = async (req: FastifyRequest, res: FastifyReply) => {
    try {
        const { id } = req.params as { id: string };
        const { conteudo, error, type, alert } = req.body as SolTicketSchema;


        // Validação e limpeza do ID
        const cleanId = parseInt(String(id).replace(/[^0-9]/g, ''));

        if (!cleanId || isNaN(cleanId)) {
            return res.status(400).send({
                status: 400,
                message: 'ID do ticket inválido ou não informado',
            } as SchemaResponse);
        }

        if (!conteudo && !error) {
            return res.status(400).send({
                status: 400,
                message: 'Conteúdo ou erro não informado',
            } as SchemaResponse);
        }

        // Busca data de aprovação do ticket
        const approvalDate = await getApprovalDate(cleanId);

        // Gera o conteudo de solução do ticket de acordo com o tipo
        let content = '';
        switch (type) {
            case 'criaOp':
                content = error ? generateErrorContentOp(error) : generateSuccessContentOp(conteudo);
                break;
            case 'ie':
                content = error ? generateErrorContentIe(error, alert) : generateSuccessContentIe(conteudo, alert);
                break;
            case 'estornaOp':
                content = error ? generateErrorContentEstornaOp(error) : generateSuccessContentEstornaOp(conteudo);
                break;
            case 'regInfo':
                content = error ? generateErrorContentModRegInfo(error) : generateSuccessContentModRegInfo(conteudo);
                break;
            default:
        }

        const solutionPayload = createSolutionPayload(cleanId, content);
        const closePayload = createClosePayload();
        const solutionDatePayload = createSolutionDatePayload(approvalDate);

        const setApprovalDate = await updateTicket(cleanId, solutionDatePayload);

        if (errorStatuses.includes(setApprovalDate.status)) {
            return res.status(setApprovalDate.status).send(setApprovalDate);
        }
        console.log('passou do setApprovalDate')

        const solutionTicket = await solTicket(solutionPayload);

        if (errorStatuses.includes(solutionTicket.status)) {
            return res.status(solutionTicket.status).send(solutionTicket);
        }
        console.log('passou do solutionTicket')
        const closeTicket = await updateTicket(cleanId, closePayload);

        if (errorStatuses.includes(closeTicket.status)) {
            return res.status(closeTicket.status).send(closeTicket);
        }

        console.log('passou do closeTicket')

        return res.status(closeTicket.status).send(closeTicket);
    } catch (error) {
        console.error('Erro ao solucionar o ticket:', (error as any).message);
        return res.status((error as any).response?.status || 500).send({
            error: (error as any).response?.data || (error as Error).message,
        });
    }
};

// ENDPOINT PARA ADICIONAR ACOMPANHAMENTO
export const addTicketFollowUp = async (req: FastifyRequest, res: FastifyReply) => {
    console.log('entrou aqui porra')
    const { id } = req.params as { id: string };
    const { content, error, type, alert, solve, close } = req.body as AdicionaAcompanhamentoSchema;
    // Validação do ticketId
    const ticketId = parseInt(String(id).replace(/[^0-9]/g, ''));
    if (!ticketId || isNaN(ticketId)) {
        return res.status(400).send({
            status: 400,
            message: 'ID do ticket inválido ou não informado',
        } as SchemaResponse);
    }

    // Validação de conteúdo ou erro
    if (!content && !error) {
        return res.status(400).send({
            status: 400,
            message: 'Conteúdo ou erro não informado',
        } as SchemaResponse);
    }

    // Gera o conteúdo com base no tipo
    const conteudo = generateContent(type, error, content, alert);

    // Processa a lógica do ticket
    if (!solve && !close) {
        return await handleFollowUp(res, ticketId, content, error, alert, errorStatuses);
    } else if (close) {
        console.log('caiu no close')
        return await handleClose(res, ticketId, conteudo, errorStatuses);
    } else if (solve) {
        return await handleSolve(res, ticketId, conteudo, errorStatuses);
    }
};
// ENDPOINT PARA VALIDAR TICKETS
export const reqValidateTicket = async (req: FastifyRequest, res: FastifyReply) => {
    const { id } = req.params as { id: string };
    const { user_validate_id, conteudo, group } = req.body as SolicitaValidacaoSchema;
    const groupType = 'Group_User';

    console.log('entremo')

    const ticketId = parseInt(String(id).replace(/[^0-9]/g, ''));

    if (!ticketId || isNaN(ticketId)) {
        return res.status(400).send({
            status: 400,
            message: 'ID do ticket inválido ou não informado',
        } as SchemaResponse);
    }

    if (!conteudo) {
        return res.status(400).send({
            status: 400,
            message: 'Conteúdo não informado',
        } as SchemaResponse);
    }

    console.log('user_validate_id', user_validate_id)
    if (!user_validate_id && !group) {
        return res.status(400).send({
            status: 400,
            message: 'É necessário informar o id do usuário ou o grupo para validação',
        } as SchemaResponse);
    }


    let usersId
    if (group) {
        const groupId = await getGroupIdByName(group)

        if (!groupId) {
            return res.status(400).send({
                status: 400,
                message: 'Grupo não encontrado',
            } as SchemaResponse);
        }

        console.log('groupId', groupId)

        const groupUsers = await getGroupInfo(groupId, groupType)
        if (errorStatuses.includes(groupUsers.status)) {
            return res.status(groupUsers.status).send(groupUsers);
        }

        usersId = groupUsers.map((user: { users_id: number }) => user.users_id);
    } else {
        usersId = [user_validate_id];
    }

    console.log('userIds', usersId)

    // LOOP para enviar a solicitação de validação para cada usuário do grupo, ou para o usuário caso seja somente 1 
    const results = [];
    for (const userId of usersId) {
        const requestValidationPayload = createRequestValidationPayload(ticketId, userId, conteudo);
        const requestTicketValidation = await reqTicketValidation(ticketId, requestValidationPayload);
        results.push(requestTicketValidation);
    }


    return res.status(200).send({
        status: 200,
        message: 'Validações processadas com sucesso',
    });

}
// ENDPOINT PARA RETORNAR VALIDAÇÕES DO TICKET
export const getValidationsTicket = async (req: FastifyRequest, res: FastifyReply) => {
    const { id } = req.params as { id: string };
    const { grupo } = req.query as { grupo: string };

    const ticketId = parseInt(String(id).replace(/[^0-9]/g, ''));

    if (!ticketId || isNaN(ticketId)) {
        return res.status(400).send({
            status: 400,
            message: 'ID do ticket inválido ou não informado',
        } as SchemaResponse);
    }

    const validations = await validationsTicket(ticketId);


    if ('status' in validations && errorStatuses.includes(validations.status)) {
        return res.status(validations.status).send(validations);
    }
    try {
        const transformedValidations = await Promise.all(
            (validations as TicketValidation[]).map(async (validation: TicketValidation) => {
                try {
                    const userGroups = await getUserGroups(validation.users_id_validate);
                    console.log('userGroups para validation:', userGroups);
                    return transformValidations([validation], userGroups)[0];
                } catch (error) {
                    console.error('Erro ao processar validation:', validation, 'Erro:', error);
                    throw error; // Rejeita para o Promise.all
                }
            })
        );

        console.log('chegou depois do transformed', transformedValidations);

        const grupoIdValidacao: number = await getGroupIdByName(grupo);
        const statusValidacaoGrupo = verificaValidacaoGrupo(transformedValidations, grupoIdValidacao);

        console.log('statusValidacaoGrupo', statusValidacaoGrupo);
        return res.status(200).send({ status: statusValidacaoGrupo });
    } catch (error: any) {
        console.error('Erro no processamento geral:', error);
        return res.status(500).send({ error: 'Erro ao processar validações', details: error.message });
    }
};

// ENDPOINT PARA CRIAR NOVO TICKET
export const createNewTicket = async (req: FastifyRequest, res: FastifyReply) => {
    const { name, content, itilcategories_id, _users_id_requester, _groups_id_assign, type } = req.body as NewTicketSchema;
    let subject = name
    console.log('subject', subject)
    console.log('content', content)
    const newTicketPayload = createNewTicketPayload(name, content, itilcategories_id, _users_id_requester, _groups_id_assign);

    const newTicketResponse = await newTicket(newTicketPayload);
    if ('status' in newTicketResponse && errorStatuses.includes(newTicketResponse.status)) {
        return res.status(newTicketResponse.status).send(newTicketResponse);
    }

    return res.status(201).send(newTicketResponse);

}
