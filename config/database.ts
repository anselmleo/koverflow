import { Sequelize } from 'sequelize';
import config from 'config';

export default new Sequelize(
  config.get('db_name'),
  config.get('db_username'),
  config.get('db_password'),
  {
    host: config.get('db_host'),
    dialect: config.get('db_dialect'),

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);
