
import { schemaResponse } from "../../schemas/generalSchemas";
import type { FastifyTypedInstance } from "../../types/types";
import z from "zod";
import { groupIdByName } from "../../controllers/glpi/groupController";
import { groupIdSchema } from "../../schemas/glpi/groupSchema";

export async function groupRoutes(app: FastifyTypedInstance) {
    app.get("/buscaIdGrupo", {
        schema: {
            tags: ["Grupos"],
            description: "Retorna id do grupo de acordo com o nome fornecido",
            querystring: z.object({
                nome: z.string(),
            }),
            response: {
                200: groupIdSchema,
                400: schemaResponse,
            },
        },
        handler: groupIdByName,
    });
}