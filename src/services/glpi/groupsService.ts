import axios from 'axios'; // Importe o axios
import { getSessionToken } from '../glpi/authService'; // Ajuste o caminho conforme necessário
import { GLPI_API_BASE_URL, GLPI_APP_TOKEN } from '../../utils/constants'; // Ajuste o caminho conforme necessário
import { SchemaResponse } from '../../schemas/generalSchemas';

export const getGroupInfo = async <T>(id: number, type: string): Promise<any> => {
    try {
        const token = await getSessionToken();

        const headers = {
            'Content-Type': 'application/json',
            'Session-Token': token,
            'App-Token': GLPI_APP_TOKEN,
        };

        const response = await axios.get(`${GLPI_API_BASE_URL}/group/${id}/${type}`, { headers });

        if (response.status === 400 || response.data.totalcount === 0) {
            return {
                status: 400,
                message: 'Não foi encontrado informações do usuário com o id informado.',
            } as SchemaResponse;
        } else {
            return response.data // retornando informações do usuário
        }

    }
    catch (error) {
        console.error('Erro na chamada da do endpoint getGroupInfo:', (error as any).response?.data || (error as Error).message);
        throw error;
    }
}

export const getUserGroups = async (id: number): Promise<any> => {
    try {
        const token = await getSessionToken();

        const headers = {
            'Content-Type': 'application/json',
            'Session-Token': token,
            'App-Token': GLPI_APP_TOKEN,
        };

        const response = await axios.get(`${GLPI_API_BASE_URL}/user/${id}/Group_User`, { headers });

        if (response.status === 400 || response.data.totalcount === 0) {
            return {
                status: 400,
                message: 'Não foi encontrado informações do usuário com o id informado.',
            } as SchemaResponse;
        } else {
            return response.data // retornando informações do usuário
        }

    }
    catch (error) {
        console.error('Erro na chamada da do endpoint getUserGroups:', (error as any).response?.data || (error as Error).message);
        throw error;
    }
}