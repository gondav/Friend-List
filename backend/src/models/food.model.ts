import {
  Table,
  Model,
  Column,
  AllowNull,
  NotEmpty
} from 'sequelize-typescript';
import { IFoodDomainModel } from './domainModels/IFoodDomainModel';

@Table({
  tableName: 'food',
  timestamps: false
})
export default class Food extends Model implements IFoodDomainModel {
  @AllowNull(false)
  @NotEmpty
  @Column
  name: string;
}
