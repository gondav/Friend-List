import {
  Model,
  Table,
  Column,
  DataType,
  AllowNull,
  NotEmpty,
  HasMany
} from 'sequelize-typescript';
import { IRelationshipStatusDomainModel } from './domainModels/IRelationshipDomainModel';
import { RelationshipStatusType } from './enums/relationshipStatusType.enum';
import Friend from './friend.model';

@Table({
  tableName: 'relationshipStatus',
  timestamps: false
})
export default class RelationshipStatus
  extends Model
  implements IRelationshipStatusDomainModel
{
  @AllowNull(false)
  @NotEmpty
  @Column({
    type: DataType.ENUM({ values: Object.keys(RelationshipStatusType) })
  })
  relationshipStatus: RelationshipStatusType;

  @HasMany(() => Friend)
  friends: Friend[];
}
