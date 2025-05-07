import axios from 'axios';
import { GLPI_API_BASE_URL, GLPI_USER_TOKEN, GLPI_APP_TOKEN } from '../../utils/constants';

let sessionToken: string | null = null;

export const initSession = async (getFullSession = true): Promise<string> => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `user_token ${GLPI_USER_TOKEN}`,
        'App-Token': GLPI_APP_TOKEN,
    };

    const url = `${GLPI_API_BASE_URL}/initSession`;
    try {
        const response = await axios.get(url, {
            headers,
            params: { get_full_session: getFullSession },
        });

        if (response.status !== 200) {
            throw new Error(`Failed to fetch Session-Token: ${response.status}`);
        }

        sessionToken = response.data.session_token;
        if (!sessionToken) {
            throw new Error('Session token is null');
        }
        return sessionToken;
    } catch (error) {
        console.error('Error fetching Session-Token:', (error as any).response?.data || (error as Error).message);
        throw error;
    }
};

export const getSessionToken = async (): Promise<string> => {
    if (!sessionToken) {
        return initSession();
    }
    return sessionToken;
};