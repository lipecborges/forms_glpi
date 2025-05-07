import { FastifyReply, FastifyRequest } from 'fastify';
import { getSessionToken as fetchSessionToken } from '../../services/glpi/authService'; // Importando o apiService

export const getSessionToken = async (req: FastifyRequest, reply: FastifyReply) => {
    console.log('Session controller hit'); // Log para verificar a execução
    try {
        const { get_full_session } = req.query as { get_full_session?: string }; // Obtém o parâmetro da query
        console.log(`Query params: ${JSON.stringify(req.query)}`); // Log dos parâmetros
        const sessionToken = await fetchSessionToken(); // Chama o serviço de inicialização da sessão
        console.log('API response:', sessionToken); // Log da resposta da API
        reply.status(200).send({ session_token: sessionToken }); // Retorna a resposta
    } catch (error) {
        console.error('Error:', (error as Error).message); // Log do erro
        reply.status((error as any).response?.status || 500).send({ error: (error as Error).message }); // Retorna o erro
    }
};