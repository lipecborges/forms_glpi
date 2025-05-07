import { FastifyReply, FastifyRequest } from 'fastify';
import { getGroupIdByName } from '../../models/glpi/groupModel';

export const groupIdByName = async (req: FastifyRequest, reply: FastifyReply) => {
    const { nome } = req.query as { nome: string }; // Mudança de req.params para req.query
    if (nome) {
        try {
            const groupId = await getGroupIdByName(nome);

            return reply.status(200).send({ id: groupId });
        } catch (error) {
            return reply.status(500).send({ error: 'Erro ao buscar o ID do grupo' });
        }
    } else {
        return reply.status(400).send({ error: 'Necessário informar o nome do grupo' });
    }
};