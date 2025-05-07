export interface SolutionPayload {
    input: {
        items_id: number;
        content: string;
        solutiontypes_id: number;
        itemtype: string;
    };
}

export interface ClosePayload {
    input: {
        status: number;
        solutiontypes_id: number;
    };
}

export interface SolutionDatePayload {
    input: {
        date: string;
    };
}

export interface FollowUpPayload {
    input: {
        itemtype: string;
        items_id: number;
        content: string;
        is_private: number;
    };
}

export interface TicketSolutionPayload {
    input: {
        itemtype: string;
        items_id: string;
        users_id: string;
        content: string;
    };
}

export interface RequestValidationPayload {
    input: {
        tickets_id: number;
        users_id_validate: number;
        comment_submission: string;
    };
}

export interface TicketValidation {
    id: number;
    entities_id: number;
    users_id: number;
    tickets_id: number;
    users_id_validate: number;
    comment_submission: string | null;
    comment_validation: string | null;
    status: number;
    submission_date: string;
    validation_date: string | null;
    timeline_position: number;
    links: any[]; // Pode ser tipado mais precisamente se soubermos a estrutura
}

// Definir o tipo para o retorno de getUserGroups
export interface UserGroup {
    id: number;
    users_id: number;
    groups_id: number;
    is_dynamic: number;
    is_manager: number;
    is_userdelegate: number;
    links: any[];
}
