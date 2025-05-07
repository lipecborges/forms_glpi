import dotenv from 'dotenv';
dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

export const ENV = process.env.NODE_ENV || 'development';

export const PORT = process.env.PORT;
export const serverAddress = process.env.SERVER_ADDRESS;

// Configuração de acordo com o ambiente
export const GLPI_API_BASE_URL = ENV === 'production' ? process.env.PRD_API_GLPI_BASE_URL : process.env.DEV_API_GLPI_BASE_URL;
export const GLPI_APP_TOKEN = ENV === 'production' ? process.env.PRD_API_GLPI_APP_TOKEN : process.env.DEV_API_GLPI_APP_TOKEN;
export const GLPI_USER_TOKEN = ENV === 'production' ? process.env.PRD_API_GLPI_USER_TOKEN : process.env.DEV_API_GLPI_USER_TOKEN;

export const baseUrl = `http://${serverAddress}:${PORT}`;

// Variáveis de ambiente para a API CNPJA
export const cnpjaApiBaseUrl = process.env.CNPJA_API_BASE_URL;
export const cnpjaApiKey = process.env.CNPJA_API_KEY;
export const cnpjaCacheTime = process.env.CNPJA_CACHE_TIME;
export const cnpjaStrategy = process.env.CNPJA_STRATEGY;

export const errorStatuses = [400, 404, 422];

