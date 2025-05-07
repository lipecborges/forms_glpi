import { glpiPrismaClient } from '../../services/dbService';
import { Answer } from '../../schemas/glpi/answerSchema';

// Define os tipos para os parâmetros e retornos das funções
type TicketId = number;
type AnswerId = number;
type QuestionId = number;

interface ItemTicket {
    items_id: number;
    tickets_id: number;
}

// Busca somente os IDs das respostas (campo items_id) utilizando os IDs dos tickets no banco de dados
export const getAnswersByTicketIds = async (ticketId: TicketId[]): Promise<ItemTicket[]> => {
    try {
        const rows = await glpiPrismaClient.glpi_items_tickets.findMany({
            where: {
                tickets_id: {
                    in: ticketId,
                },
            },
            select: {
                items_id: true, // Retorna o campo items_id
                tickets_id: true, // Retorna o campo tickets_id
            },
        });
        return rows;
    } catch (error) {
        console.error('Error fetching items_id by ticket IDs:', (error as Error).message);
        throw error;
    }
};

// Busca as respostas utilizando os Ids das respostas no banco de dados
export const getAnswersById = async (idsAnswers?: AnswerId[]): Promise<Answer[]> => {
    try {
        const rows = await glpiPrismaClient.glpi_plugin_formcreator_answers.findMany({
            where: idsAnswers && idsAnswers.length > 0 ? {
                plugin_formcreator_formanswers_id: {
                    in: idsAnswers,
                },
            } : undefined,
        });
        return rows;
    } catch (error) {
        console.error('Error fetching answers by IDs:', (error as Error).message);
        throw error;
    }
};

// Busca os nomes das perguntas utilizando os Ids das perguntas no banco de dados
export const getQuestionNameById = async (ids: QuestionId[]): Promise<Record<number, string>> => {
    try {
        const rows = await glpiPrismaClient.glpi_plugin_formcreator_questions.findMany({
            where: {
                id: {
                    in: ids,
                },
            },
            select: {
                id: true,
                name: true,
            },
        });

        // Transforma o resultado em um objeto { id: name }
        const questionNames: Record<number, string> = {};
        rows.forEach((row: { id: number; name: string }) => {
            questionNames[row.id] = row.name;
        });

        return questionNames;
    } catch (error) {
        console.error('Error fetching questions by IDs:', (error as Error).message);
        throw error;
    }
};