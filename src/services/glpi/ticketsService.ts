import axios from 'axios'; // Importe o axios
import { getSessionToken } from '../glpi/authService'; // Ajuste o caminho conforme necessário
import { GLPI_API_BASE_URL, GLPI_APP_TOKEN } from '../../utils/constants'; // Ajuste o caminho conforme necessário
import { TicketPayload } from '../../utils/glpi/payloads/ticketPayloads';
import { NewTicketResponseSchema, TicketId } from '../../schemas/glpi/ticketSchema';
import { schemaResponse, SchemaResponse } from '../../schemas/generalSchemas';
import { Schema } from 'zod';

export const updateTicket = async <T>(id: TicketId, payload: TicketPayload<T>): Promise<SchemaResponse> => {
    try {
        const token = await getSessionToken();

        const headers = {
            'Content-Type': 'application/json',
            'Session-Token': token,
            'App-Token': GLPI_APP_TOKEN,
        };

        const response = await axios.put(`${GLPI_API_BASE_URL}/Ticket/${id}`, payload, { headers });

        if (response.status == 200) {
            return {
                status: 200,
                message: 'Ticket atualizado com sucesso',
            } as SchemaResponse;
        } else {
            return response.data as SchemaResponse;
        }

    } catch (error) {
        console.error('Erro na chamada da do endpoint updateTicket:', (error as any).response?.data || (error as Error).message);
        throw error;
    }
}

export const solTicket = async <T>(payload: TicketPayload<T>): Promise<SchemaResponse> => {
    try {
        const token = await getSessionToken();

        const headers = {
            'Content-Type': 'application/json',
            'Session-Token': token,
            'App-Token': GLPI_APP_TOKEN,
        };

        const response = await axios.post(`${GLPI_API_BASE_URL}/ITILSolution/`, payload, { headers });

        if (response.status == 200) {
            return {
                status: 200,
                message: 'Ticket Solucionado com Sucesso',
            } as SchemaResponse;
        } else {
            return response.data as SchemaResponse;
        }
    }
    catch (error) {
        console.error('Erro na chamada da do endpoint solTicket:', (error as any).response?.data || (error as Error).message);
        throw error;
    }
};

export const newTicket = async<T>(payload: TicketPayload<T>): Promise<NewTicketResponseSchema | SchemaResponse> => {
    try {
        const token = await getSessionToken();
        const headers = {
            'Content-Type': 'application/json',
            'Session-Token': token,
            'App-Token': GLPI_APP_TOKEN,
        };

        const response = await axios.post(`${GLPI_API_BASE_URL}/Ticket`, payload, { headers });

        if (response.status == 200 || response.status == 201) {
            return {
                id: response.data.id,
                message: 'Ticket criado com sucesso',
            } as NewTicketResponseSchema;
        } else {
            return response.data as SchemaResponse;
        }
    } catch (error) {
        console.error('Erro na chamada da do endpoint newTicket:', (error as any).response?.data || (error as Error).message);
        throw error;
    }
};

export const ticketFollowUp = async <T>(payload: TicketPayload<T>): Promise<SchemaResponse> => {
    try {
        const token = await getSessionToken();

        const headers = {
            'Content-Type': 'application/json',
            'Session-Token': token,
            'App-Token': GLPI_APP_TOKEN,
        };

        const response = await axios.post(`${GLPI_API_BASE_URL}/ITILFollowup`, payload, { headers });

        if (response.status == 200 || response.status == 201) {
            return {
                status: 200,
                message: 'Adicionado Acompanhamento ao Ticket com Sucesso',
            } as SchemaResponse;
        } else {
            return response.data as SchemaResponse;
        }
    }
    catch (error) {
        console.error('Erro na chamada da do endpoint ticketFollowUp:', (error as any).response?.data || (error as Error).message);
        throw error;
    }
};

export const validationsTicket = async (id: TicketId): Promise<any> => {
    try {
        const token = await getSessionToken();
        const headers = {
            'Content-Type': 'application/json',
            'Session-Token': token,
            'App-Token': GLPI_APP_TOKEN,
        };
        const response = await axios.get(`${GLPI_API_BASE_URL}/Ticket/${id}/TicketValidation`, { headers });
        if (response.status === 400 || response.data.totalcount === 0) {
            return {
                status: 400,
                message: 'Erro ao buscar validações do ticket',
            } as SchemaResponse;
        } else {
            return response.data;
        }
    }
    catch (error) {
        console.error('Erro na chamada da do endpoint getValidationTicket:', (error as any).response?.data || (error as Error).message);
        throw error;
    }
}

export const reqTicketValidation = async <T>(id: TicketId, payload: TicketPayload<T>): Promise<SchemaResponse> => {
    try {
        const token = await getSessionToken();

        const headers = {
            'Content-Type': 'application/json',
            'Session-Token': token,
            'App-Token': GLPI_APP_TOKEN,
        };

        const response = await axios.post(`${GLPI_API_BASE_URL}/Ticket/${id}/TicketValidation`, payload, { headers });

        if (response.status == 200) {
            return {
                status: 200,
                message: 'Solicitação de Validação solicitada!',
            } as SchemaResponse;
        } else {
            return response.data as SchemaResponse;
        }
    }
    catch (error) {
        console.error('Erro na chamada da do endpoint ticketValidation:', (error as any).response?.data || (error as Error).message);
        throw error;
    }
}

