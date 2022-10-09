import { Model, Table, Column, DataType } from 'sequelize-typescript';
import { IRelationshipStatusDomainModel } from './domainModels/IRelationshipDomainModel';
import { RelationshipStatusType } from './enums/relationshipStatusType.enum';

@Table({
  tableName: 'relationshipStatus',
  timestamps: false
})
export default class RelationshipStatus
  extends Model
  implements IRelationshipStatusDomainModel
{
  @Column({
    type: DataType.ENUM({ values: Object.keys(RelationshipStatusType) })
  })
  relationshipStatus: RelationshipStatusType;
}