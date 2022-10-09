import { Sequelize } from 'sequelize-typescript';
import config from '../config';
import path from 'path';

const database = new Sequelize(
  config.mysql.database!,
  config.mysql.user!,
  config.mysql.password,
  {
    host: config.mysql.host,
    dialect: 'mysql',
    models: [path.join(__dirname, '..', 'models')]
  }
);

export const db = {
  async checkConnection(): Promise<void> {
    try {
      await database.authenticate();
      console.error('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
};
