export interface ValidacaoTicket {
    ticket_id: number;
    user_requester_id: number;
    user_validate: {
        id: number;
        groups: number[] | null; // Deve ser number[], não { id: number }[]
    };
    comment_submission: string | null;
    comment_validation: string | null;
    status: number;
    submission_date: string;
    validate_date: string | null;
}
// Interface para o tipo de grupoIdValidacao
export interface GrupoId {
    id: number;
}
