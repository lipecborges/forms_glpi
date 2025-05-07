import { getTicketsValidated, solutionTicket, reqValidateTicket, getValidationsTicket, addTicketFollowUp, createNewTicket } from "../../controllers/glpi/ticketsController";
import { ticketSchema, solTicketSchema, solicitaValidacaoSchema, validacoesTicketSchema, adicionaAcompanhamentoSchema, ticketStatusValidacaoSchema, newTicketResponseSchema, newTicketSchema } from "../../schemas/glpi/ticketSchema";
import { schemaResponse } from "../../schemas/generalSchemas";
import type { FastifyTypedInstance } from "../../types/types";
import z from "zod";


export async function ticketsRoutes(app: FastifyTypedInstance) {
    app.get("/ticketsValidados/:type", {
        schema: {
            tags: ["Tickets"],
            description: "Retorna tickets validados de acordo com o parâmetro fornecido",
            params: z.object({
                type: z.string(),
            }),
            response: {
                200: ticketSchema,
                400: schemaResponse,
            },
        },
        handler: getTicketsValidated,
    });

    app.get("/validacoesTicket/:id", {
        schema: {
            tags: ["Tickets"],
            description: "Retorna validações do ticket de acordo com o id fornecido",
            params: z.object({
                id: z.string(),
            }),
            querystring: z.object({
                grupo: z.string(),
            }),
            response: {
                200: ticketStatusValidacaoSchema,
                400: schemaResponse,
            },
        },
        handler: getValidationsTicket,
    });

    app.put("/solucionaTicket/:id", {
        schema: {
            tags: ["Tickets"],
            description: "Soluciona e fecha o ticket com o id fornecido",
            params: z.object({
                id: z.string(),
            }),
            body: solTicketSchema,
            response: {
                200: schemaResponse,
                400: schemaResponse,
            },
        },
        handler: solutionTicket,
    })

    app.post("/adicionaAcompanhamento/:id", {
        schema: {
            tags: ["Tickets"],
            description: "Adiciona Acompanhamento ao Ticket",
            params: z.object({
                id: z.string(),
            }),
            body: adicionaAcompanhamentoSchema,
            response: {
                200: schemaResponse,
                400: schemaResponse,
            },
        },
        handler: addTicketFollowUp,
    })

    app.post("/novoTicket", {
        schema: {
            tags: ["Tickets"],
            description: "Cria um novo ticket",
            body: newTicketSchema,
            response: {
                200: newTicketResponseSchema,
                201: newTicketResponseSchema,
                400: schemaResponse,
            },
        },
        handler: createNewTicket,
    })

    app.post("/solicitaValidacao/:id", {
        schema: {
            tags: ["Tickets"],
            description: "Solicita validação do Ticket",
            params: z.object({
                id: z.string(),
            }),
            body: solicitaValidacaoSchema,
            response: {
                200: schemaResponse,
                400: schemaResponse,
            },
        },
        handler: reqValidateTicket,
    })
}