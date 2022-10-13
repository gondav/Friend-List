export interface IFriendListViewModel {
  id: number;
  name: string;
  email: string;
  comment: string;
  relationshipStatusId: number;
  food: {
    id: number;
    name: string;
  };
  relationshipStatus: {
    id: number;
    relationshipStatus: string;
  };
}
