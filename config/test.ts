import dotenv from 'dotenv';
dotenv.config();

export default {
  environment: 'dev',
  app_name: 'koverflow',
  port: process.env.TEST_PORT,
  db_host: process.env.TEST_DB_HOST,
  db_username: process.env.TEST_DB_USERNAME,
  db_password: process.env.TEST_DB_PASSWORD,
  db_port: process.env.TEST_DB_PORT,
  db_name: process.env.TEST_DB_NAME,
  db_dialect: process.env.TEST_DB_DIALECT
};
