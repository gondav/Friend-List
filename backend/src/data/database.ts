import { Sequelize } from 'sequelize-typescript';
import config from '../config';
import path from 'path';
import RelationshipStatus from '../models/relationshipStatus.model';
import Food from '../models/food.model';
import Friend from '../models/friend.model';
import { relationshipStatuses } from '../seeders/relationshipStatuses';
import { food } from '../seeders/food';
import { friends } from '../seeders/friends';

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
  },

  async synchronizeModels(): Promise<void> {
    try {
      await database.sync();
      console.log('All models were synchronized successfully.');
    } catch (error) {
      console.error('Unable to synchronize models:', error);
    }
  },

  async fillUpTablesWithMockedData(): Promise<void> {
    try {
      await RelationshipStatus.bulkCreate(relationshipStatuses);
      await Food.bulkCreate(food);
      await Friend.bulkCreate(friends);
    } catch (error) {
      console.error('Unable to fill up tables with test data:', error);
    }
  }
};
