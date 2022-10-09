import Food from '../models/food.model';
import Friend from '../models/friend.model';
import RelationshipStatus from '../models/relationshipStatus.model';
import { IFriendRequestModel } from 'src/models/requestModels/IFriendRequestModel';

export const friendRepository = {
  getFriendsWithAllAttributes(): Promise<Friend[]> {
    return Friend.findAll({ include: [Food, RelationshipStatus] });
  },

  getFriendWithAllAttributes(id: number): Promise<Friend | null> {
    return Friend.findOne({
      where: {
        id
      },
      include: [Food, RelationshipStatus]
    });
  },

  createFriend(friendAttributes: IFriendRequestModel): Promise<Friend> {
    return Friend.create(<never>friendAttributes);
  }
};
