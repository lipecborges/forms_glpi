import { getQuestionNameById } from '../../../models/glpi/answersModel';
import { Answer } from '../../../schemas/glpi/answerSchema';

interface TranslatedAnswer {
    question: string;
    answer: string;
}

export async function translateAnswers(answers: Answer[]): Promise<TranslatedAnswer[]> {
    // Extrai os IDs das perguntas das respostas
    const questionIds = answers.map(answer => answer.plugin_formcreator_questions_id);

    // Busca os nomes das perguntas
    const questionNames = await getQuestionNameById(questionIds);

    // Mapeia as respostas para incluir o nome da pergunta, ignorando perguntas relacionadas a "email"
    return answers
        .filter(answer => {
            const questionName = questionNames[answer.plugin_formcreator_questions_id]?.toLowerCase() || '';
            return !(questionName === 'email' || questionName === 'e-mail');
        })
        .map(answer => {
            let question = questionNames[answer.plugin_formcreator_questions_id] || 'Questão Desconhecida';
            // Substitui os espaços por underscores
            question = question.replace(/\s+/g, '_');
            return {
                question,
                answer: answer.answer,
            };
        });
}