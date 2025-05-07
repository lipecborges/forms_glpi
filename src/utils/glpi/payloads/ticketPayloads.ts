import { SolutionPayload, ClosePayload, SolutionDatePayload, FollowUpPayload, TicketSolutionPayload, RequestValidationPayload } from '../../../types/glpi/ticketsTypes';

import { NewTicketSchema } from '../../../schemas/glpi/ticketSchema';

export interface TicketPayload<T> {
    input: T;
}

export const createSolutionPayload = (id: number, content: string): SolutionPayload => ({
    input: {
        items_id: id,
        content: content,
        solutiontypes_id: 1,
        itemtype: 'Ticket',
    },
});

export const createClosePayload = (): ClosePayload => ({
    input: {
        status: 6,
        solutiontypes_id: 1,
    },
});

export const createSolutionDatePayload = (approvalDate: string): SolutionDatePayload => ({
    input: {
        date: approvalDate,
    },
});

export const ticketFollowUpPayload = (id: number, content: string): FollowUpPayload => ({
    input: {
        itemtype: 'Ticket',
        items_id: id,
        content: content,
        is_private: 0,
    },
});

export const ticketSolutionPayload = (id: string, content: string, userID: string): TicketSolutionPayload => ({
    input: {
        itemtype: 'Ticket',
        items_id: id,
        users_id: userID,
        content: content,
    },
});


export const createRequestValidationPayload = (ticket_id: number, user_id: number, content: string): RequestValidationPayload => ({
    input: {
        tickets_id: ticket_id,
        users_id_validate: user_id,
        comment_submission: content,
    },
});

export const createNewTicketPayload = (subject: NewTicketSchema['name'], content: NewTicketSchema['content'], itilcategories_id: NewTicketSchema['itilcategories_id'], _users_id_requester: NewTicketSchema['_users_id_requester'], _groups_id_assign: NewTicketSchema['_groups_id_assign']): TicketPayload<NewTicketSchema> => ({
    input: {
        name: subject,
        content,
        itilcategories_id,
        _users_id_requester,
        _groups_id_assign,
    },
})