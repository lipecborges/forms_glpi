import fastify from "fastify";
import { fastifyCors } from "@fastify/cors";
import { validatorCompiler, serializerCompiler, jsonSchemaTransform, createJsonSchemaTransformObject } from 'fastify-type-provider-zod';
import fastifySwagger from '@fastify/swagger';
import { fastifySwaggerUi } from '@fastify/swagger-ui';
import { registerRoutes } from "./routes"; // Importando todas as rotas de uma vez

const { PORT } = require('./utils/constants');

const app = fastify();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(fastifyCors, { origin: "*" });

app.register(fastifySwagger, {
    openapi: {
        info: {
            title: "GLPI FORMS API",
            description: "API para formulários do GLPI",
            version: "1.0.0",
        },
        servers: [
            { url: "http://10.10.110.103:3333", description: "Local server" },
        ],
    },
    transform: jsonSchemaTransform,
});

app.register(fastifySwaggerUi, {
    routePrefix: '/docs',
});

registerRoutes(app);

app.listen({ port: PORT, host: '0.0.0.0' }).then(() => {
    console.log(`O servidor está rodando ${PORT}`);
});