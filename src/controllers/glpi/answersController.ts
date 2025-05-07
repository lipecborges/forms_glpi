import { FastifyReply, FastifyRequest } from 'fastify';
import { getAnswersById, getAnswersByTicketIds } from '../../models/glpi/answersModel';
import { error } from '../../schemas/generalSchemas';
import { translateAnswers } from '../../utils/glpi/functions/findQuestionNames';
import { GroupedAnswers } from '../../schemas/glpi/answerSchema';

export const getAnswers = async (req: FastifyRequest, reply: FastifyReply) => {
    //const { id } = req.query as { id?: string };
    const { id } = req.params as { id?: string };

    if (id) {

        const ticketsId = id.split(',').map(id => parseInt(id.trim())).filter(id => !isNaN(id));

        const answersId = await getAnswersByTicketIds(ticketsId);
        // Mapeia o array de objetos para um array de IDs
        const answerId = answersId.map(item => item.items_id)
        // Busca as respostas do formulário utilizando os ID das resposta, pego no ticket.
        const answers = await getAnswersById(answerId);

        // return console.log('answers:', JSON.stringify(answers, null, 2));
        const translatedAnswers = await translateAnswers(answers);

        // Agrupa as respostas traduzidas por FORM_ANSWER_ID
        const groupedAnswers = answers.reduce<GroupedAnswers[]>((acc, answer) => {
            const formAnswerId = answer.plugin_formcreator_formanswers_id;
            let groupedAnswer = acc.find(ga => ga.formAnswerId === formAnswerId);

            if (!groupedAnswer) {
                groupedAnswer = {
                    ticketId: ticketsId[0],
                    formAnswerId: formAnswerId,
                    questions: {}
                };
                acc.push(groupedAnswer);
            }

            const translatedAnswer = translatedAnswers.find(ta => ta.answer === answer.answer);
            if (translatedAnswer) {
                groupedAnswer.questions[translatedAnswer.question] = translatedAnswer.answer;
            }
            return acc;
        }, []);

        console.log('groupedAnswers:', JSON.stringify(groupedAnswers, null, 2));


        return reply.status(200).send(groupedAnswers);
    } else {
        error.error = 'Necessário informar o ID do ticket';
        return reply.status(400).send(error);
    }
};