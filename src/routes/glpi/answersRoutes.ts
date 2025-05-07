import { getAnswers } from "../../controllers/glpi/answersController";
import { groupedAnswersSchema } from "../../schemas/glpi/answerSchema";
import { schemaResponse } from "../../schemas/generalSchemas";
import type { FastifyTypedInstance } from "../../types/types";
import z from "zod";


export async function answersRoutes(app: FastifyTypedInstance) {
    app.get("/answers/:id", {
        schema: {
            tags: ["Answers"],
            description: "Retorna todas as respostas de acordo com o id do ticket fornecido",
            params: z.object({
                id: z.string(),
            }),
            response: {
                200: groupedAnswersSchema,
                400: schemaResponse,
            },
        },
        handler: getAnswers,
    });
}