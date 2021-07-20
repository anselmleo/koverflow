import dotenv from 'dotenv';
dotenv.config();

export default {
  environment: 'dev',
  app_name: 'koverflow',
  port: process.env.DEV_PORT,
  db_host: process.env.DEV_DB_HOST,
  db_username: process.env.DEV_DB_USERNAME,
  db_password: process.env.DEV_DB_PASSWORD,
  db_port: process.env.DEV_DB_PORT,
  db_name: process.env.DEV_DB_NAME,
  db_dialect: process.env.DEV_DB_DIALECT
};
