import Food from '../models/food.model';
import Friend from '../models/friend.model';
import RelationshipStatus from '../models/relationshipStatus.model';
import { IFriendRequestModel } from '../models/requestModels/IFriendRequestModel';

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
  },

  updateFriend(
    id: number,
    friendAttributes: IFriendRequestModel
  ): Promise<number[]> {
    return Friend.update(friendAttributes, {
      where: {
        id
      }
    });
  },

  deleteFriend(id: number): Promise<number> {
    return Friend.destroy({
      where: {
        id
      }
    });
  }
};
