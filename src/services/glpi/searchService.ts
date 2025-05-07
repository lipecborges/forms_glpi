import axios from 'axios'; // Importe o axios
import { getSessionToken } from '../glpi/authService'; // Ajuste o caminho conforme necessário
import { GLPI_API_BASE_URL, GLPI_APP_TOKEN } from '../../utils/constants'; // Ajuste o caminho conforme necessário
import type { SendParams, SearchResponse, UserInfo } from '../../types/glpi/interfaces';
import { SchemaResponse } from '../../schemas/generalSchemas';

// Serviço para buscar itens de pesquisa
export const searchItems = async <T>(itemType: string, params: SendParams): Promise<SearchResponse<T>> => {
    const sessionToken = await getSessionToken();

    const headers = {
        'Content-Type': 'application/json',
        'Session-Token': sessionToken,
        'App-Token': GLPI_APP_TOKEN,
    };

    const url = `${GLPI_API_BASE_URL}/search/${itemType}/`;
    try {
        const response = await axios.get<SearchResponse<T>>(url, {
            headers,
            params, // Envia os parâmetros como query string
        });

        if (response.data.totalcount === 0) {
            return {
                status: 400,
                message: 'Não foram encontrados tickets com os parâmetros informados',
            } as SchemaResponse;
        } else {
            return response.data
        }

    } catch (error) {
        return {
            status: 400,
            message: (error as any).response?.data || (error as Error).message
        }
    }
};

export const getUserInfo = async (params: SendParams = {}): Promise<UserInfo> => {
    try {
        const itemType = 'User'; // Ajuste o tipo conforme necessário
        // Busca informações na API

        const response = await searchItems<UserInfo>(itemType, params);

        if (response.status === 400 || response.data.totalcount === 0) {
            return {
                status: 400,
                message: 'Não foi encontrado informações do usuário com o id informado.',
            } as SchemaResponse;
        } else {
            return response.data[0] // retornando informações do usuário
        }
    } catch (error) {
        return {
            status: 400,
            message: (error as any).response?.data || (error as Error).message
        }
    }
};