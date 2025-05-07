import { validacoesTicketSchema } from "../../../schemas/glpi/ticketSchema";
import { TicketValidation } from "../../../types/glpi/ticketsTypes";

export const transformValidations = (
    validations: TicketValidation[],
    userGroups: { id: number; users_id: number; groups_id: number; is_dynamic: number; is_manager: number; is_userdelegate: number; links: any[] }[] | null | undefined
): ReturnType<typeof validacoesTicketSchema.parse> => {
    const groupIds = userGroups && userGroups.length > 0
        ? userGroups.map(group => group.groups_id) // Extrai os groups_id
        : null;

    const transformed = validations.map((validation) => {
        console.log('validation sendo transformada:', validation);
        return {
            ticket_id: validation.tickets_id,
            user_requester_id: validation.users_id,
            user_validate: {
                id: validation.users_id_validate,
                groups: groupIds,
            },
            comment_submission: validation.comment_submission,
            comment_validation: validation.comment_validation,
            status: validation.status,
            submission_date: validation.submission_date,
            validate_date: validation.validation_date,
        };
    });

    console.log('transformed antes da validação:', transformed);

    try {
        const parsed = validacoesTicketSchema.parse(transformed);
        console.log('transformed após validação:', parsed);
        return parsed;
    } catch (error) {
        console.error('Erro ao validar transformed com Zod:', error);
        throw error;
    }
};