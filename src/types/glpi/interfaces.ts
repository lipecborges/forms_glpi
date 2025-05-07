import { z } from "zod";

// Define os tipos para os parâmetros e a resposta
export interface SendParams {
    [key: string]: string | string[] | number | number[];
}

export interface ApprovalDateResponse {
    [key: string]: any; // Permite propriedades adicionais
}

export interface Ticket {
    '1': string;   // Título (name)
    '2': string;   // ID (id)
    '3': string;   // Prioridade (priority)
    '4': string;   // Nome do requerente (users_id_requester -> name)
    '5': string;   // Nome do técnico (users_id_assign -> name)
    '12': string;  // Status (status)
    '7': string;   // Categoria (itilcategories -> completename)
    '15': string;  // Data de abertura (date)
    [key: string]: string | number | undefined; // Permite campos adicionais
}

export interface UserInfo {
    [key: string]: any; // Permite propriedades adicionais
}

export interface SearchResponse<T> {
    [key: string]: any; // Permite propriedades adicionais
}