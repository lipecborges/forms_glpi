import dotenv from 'dotenv';
dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

type DbConfig = {
  host: string | undefined;
  port: string | undefined;
  user: string | undefined;
  password: string | undefined;
  database: string | undefined;
  url: string | undefined;
};

type Config = {
  development: {
    glpi: DbConfig;
    vmix_digger: DbConfig;
    vmix_integracao: DbConfig;
  };
  production: {
    glpi: DbConfig;
    vmix_digger: DbConfig;
    vmix_integracao: DbConfig;
  };
};

const dbConfig: Config = {
  development: {
    // Banco de dados DEV do GLPI (MySQL)
    glpi: {
      host: process.env.DEV_DB_GLPI_HOST,
      port: process.env.DEV_DB_GLPI_PORT,
      user: process.env.DEV_DB_GLPI_USER,
      password: process.env.DEV_DB_GLPI_PASSWORD,
      database: process.env.DEV_DB_GLPI_NAME,
      url: process.env.DEV_DB_GLPI_URL,
    },
    // Banco de dados VM_DIGGER (SQL Server) Visual Mix
    vmix_digger: {
      host: process.env.DEV_DB_VISUAL_MIX_HOST,
      port: process.env.DEV_DB_VISUAL_MIX_PORT,
      user: process.env.DEV_DB_VISUAL_MIX_USER,
      password: process.env.DEV_DB_VISUAL_MIX_PASSWORD,
      database: process.env.DB_VISUAL_MIX_DIGGER,
      url: process.env.DEV_DB_VISUAL_MIX_DIG_URL,
    },
    // Banco de dados VM_INTEGRACAO (SQL Server) Visual Mix
    vmix_integracao: {
      host: process.env.DEV_DB_VISUAL_MIX_HOST,
      port: process.env.DEV_DB_VISUAL_MIX_PORT,
      user: process.env.DEV_DB_VISUAL_MIX_USER, // Usuário do banco de dados
      password: process.env.DEV_DB_VISUAL_MIX_PASSWORD, // Senha do banco de dados
      database: process.env.DB_VISUAL_MIX_INTEGRACAO, // Nome do banco de dados
      url: process.env.DEV_DB_VISUAL_MIX_INT_URL, // URL de conexão
    },
  },
  production: {
    // Banco de dados PRD do GLPI (MySQL)
    glpi: {
      host: process.env.PRD_DB_GLPI_HOST,
      port: process.env.PRD_DB_GLPI_PORT,
      user: process.env.PRD_DB_GLPI_USER,
      password: process.env.PRD_DB_GLPI_PASSWORD,
      database: process.env.PRD_DB_GLPI_NAME,
      url: process.env.PRD_DB_GLPI_URL,
    },
    // Banco de dados PRD do VM_DIGGER Visual Mix (SQL Server)
    vmix_digger: {
      host: process.env.PRD_DB_VISUAL_MIX_HOST,
      port: process.env.PRD_DB_VISUAL_MIX_PORT,
      user: process.env.PRD_DB_VISUAL_MIX_USER,
      password: process.env.PRD_DB_VISUAL_MIX_PASSWORD,
      database: process.env.DB_VISUAL_MIX_DIGGER,
      url: process.env.PRD_DB_VISUAL_MIX_DIG_URL,
    },
    // Banco de dados PRD do VM_INTEGRACAO Visual Mix (SQL Server)
    vmix_integracao: {
      host: process.env.PRD_DB_VISUAL_MIX_HOST,
      port: process.env.PRD_DB_VISUAL_MIX_PORT,
      user: process.env.PRD_DB_VISUAL_MIX_USER,
      password: process.env.PRD_DB_VISUAL_MIX_PASSWORD,
      database: process.env.DB_VISUAL_MIX_INTEGRACAO,
      url: process.env.PRD_DB_VISUAL_MIX_INT_URL,
    },
  },
};



const currentEnv: keyof Config = (process.env.NODE_ENV as keyof Config) || 'development';

if (!dbConfig[currentEnv]) {
  throw new Error(`Configuração para o ambiente '${currentEnv}' não encontrada.`);
}

export default dbConfig[currentEnv];