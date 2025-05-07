import { glpiPrismaClient } from '../../services/dbService';

// Define os tipos para os parâmetros e retornos das funções
type Email = string;
type UserId = number
type TicketId = number;


// Busca somente os IDs das respostas (campo items_id) utilizando os IDs dos tickets no banco de dados
export const getUserByEmail = async (email: Email): Promise<UserId> => {
    try {
        const row = await glpiPrismaClient.glpi_useremails.findFirst({
            where: {
                email: email,
            },
            select: {
                users_id: true,
            },
        });

        if (row) {
            return row.users_id;
        } else {
            throw new Error('User not found');
        }
    } catch (error) {
        console.error('Error fetching user_id by email:', (error as Error).message);
        throw error;
    }
};



// Busca somente os IDs das respostas (campo items_id) utilizando os IDs dos tickets no banco de dados
export const getUserEmail = async (ticketId: TicketId): Promise<Email> => {
    try {
        const rows = await glpiPrismaClient.glpi_tickets_users.findMany({
            where: {
                tickets_id: ticketId,
            },
            select: {
                alternative_email: true, // Retorna o campo items_id
            },
        });
        if (rows.length > 0) {
            return rows[0].alternative_email;
        }
        else {
            throw new Error('User not found');
        }
    } catch (error) {
        console.error('Error fetching items_id by ticket IDs:', (error as Error).message);
        throw error;
    }
};
