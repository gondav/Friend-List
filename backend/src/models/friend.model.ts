import {
  Model,
  Table,
  AllowNull,
  NotEmpty,
  Column,
  Unique,
  ForeignKey,
  BelongsTo
} from 'sequelize-typescript';
import { IFriendDomainModel } from './domainModels/IFriendDomainModel';
import Food from './food.model';
import RelationshipStatus from './relationshipStatus.model';

@Table({
  tableName: 'friend',
  timestamps: false
})
export default class Friend extends Model implements IFriendDomainModel {
  @AllowNull(false)
  @NotEmpty
  @Column
  name: string;

  @AllowNull(false)
  @NotEmpty
  @Unique(true)
  @Column
  email: string;

  @Column
  comment: string;

  @ForeignKey(() => Food)
  @Column
  favFoodId: number;

  @BelongsTo(() => Food)
  food: Food;

  @ForeignKey(() => RelationshipStatus)
  @Column
  relationshipStatusId: number;

  @BelongsTo(() => RelationshipStatus)
  relationshipStatus: RelationshipStatus;
}
