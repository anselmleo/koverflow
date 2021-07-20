import dotenv from 'dotenv';
dotenv.config();

export default {
  environment: 'dev',
  app_name: 'koverflow',
  port: process.env.STAGING_PORT,
  db_host: process.env.STAGING_DB_HOST,
  db_username: process.env.STAGING_DB_USERNAME,
  db_password: process.env.STAGING_DB_PASSWORD,
  db_port: process.env.STAGING_DB_PORT,
  db_name: process.env.STAGING_DB_NAME,
  db_dialect: process.env.STAGING_DB_DIALECT
};
