import { RelationshipStatusType } from '../enums/relationshipStatusType.enum';

export interface IRelationshipStatusDomainModel {
  id?: number;
  relationshipStatus: RelationshipStatusType;
}
