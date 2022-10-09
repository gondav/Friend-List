import {
  Table,
  Model,
  Column,
  AllowNull,
  NotEmpty,
  HasMany
} from 'sequelize-typescript';
import { IFoodDomainModel } from './domainModels/IFoodDomainModel';
import Friend from './friend.model';

@Table({
  tableName: 'food',
  timestamps: false
})
export default class Food extends Model implements IFoodDomainModel {
  @AllowNull(false)
  @NotEmpty
  @Column
  name: string;

  @HasMany(() => Friend)
  friends: Friend[];
}
