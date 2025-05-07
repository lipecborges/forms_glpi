const { PrismaClient: PrismaGlpiClient } = require('../../prisma/generated/glpi'); // MySQL GLPI
import sql from 'mssql'; // SQL Server

const dbConfig = require('../config/dbConfig').default;

// Inicializa Prisma Client para GLPI (MySQL)
export const glpiPrismaClient = new PrismaGlpiClient({
  datasources: {
    db: {
      url: dbConfig.glpi.url,
    },
  },
});

// Inicializa Prisma Client para Visual Mix (SQL Server)
export const vmixDiggerPool = new sql.ConnectionPool({
  user: dbConfig.vmix_digger.user ?? '',
  password: dbConfig.vmix_digger.password ?? '',
  server: dbConfig.vmix_digger.host ?? '',
  port: dbConfig.vmix_digger.port ? parseInt(dbConfig.vmix_digger.port) : 1433,
  database: dbConfig.vmix_digger.database ?? '',
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
});
