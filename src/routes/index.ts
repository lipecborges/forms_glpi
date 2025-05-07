import { FastifyInstance } from "fastify";
import { answersRoutes } from "./glpi/answersRoutes";
import { ticketsRoutes } from "./glpi/ticketsRoutes";
import { groupRoutes } from "./glpi/groupRoutes";

export async function registerRoutes(app: FastifyInstance) {
    app.register(answersRoutes);
    app.register(ticketsRoutes);
    app.register(groupRoutes);
}
