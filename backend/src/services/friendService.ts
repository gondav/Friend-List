import Friend from '../models/friend.model';
import { friendRepository } from '../repositories/friendRepository';
import { notFoundError, serverError } from './errorCreatorService';
import { IFriendRequestViewModel } from '../models/requestModels/IFriendRequestViewModel';
import { foodRepository } from '../repositories/foodRepository';
import { IFriendRequestModel } from '../models/requestModels/IFriendRequestModel';

export const friendService = {
  async getFriendsWithAllAttributes(): Promise<Friend[]> {
    return await friendRepository.getFriendsWithAllAttributes();
  },

  async getFriendWithAllAttributes(id: number): Promise<Friend> {
    const friend = await friendRepository.getFriendWithAllAttributes(id);

    if (!friend) {
      return Promise.reject(notFoundError('Friend was not found'));
    }
    return friend;
  },

  async createFriend(
    friendAttributes: IFriendRequestViewModel
  ): Promise<Friend> {
    const { favFood } = friendAttributes;

    let food = await foodRepository.getFoodByName(favFood);

    if (!food) {
      food = await foodRepository.createFood(favFood);
    }

    if (!food) {
      Promise.reject(serverError('Cannot save friend'));
    }

    const mappedFriendAttributes = this.mapFriendRequestViewModel(
      friendAttributes,
      food.id
    );

    return await friendRepository.createFriend(mappedFriendAttributes);
  },

  async updateFriend(
    id: number,
    friendAttributes: IFriendRequestViewModel
  ): Promise<void> {
    const { favFood } = friendAttributes;

    let food = await foodRepository.getFoodByName(favFood);

    if (!food) {
      food = await foodRepository.createFood(favFood);
    }

    if (!food) {
      Promise.reject(serverError('Cannot update friend'));
    }

    const mappedFriendAttributes = this.mapFriendRequestViewModel(
      friendAttributes,
      food.id
    );

    const numberOfUpdates = await friendRepository.updateFriend(
      id,
      mappedFriendAttributes
    );

    if (numberOfUpdates[0] === 0) {
      Promise.reject(serverError('Cannot update friend'));
    }
  },

  async deleteFriend(id: number): Promise<void> {
    const numOfDeletedFriend = await friendRepository.deleteFriend(id);

    if (!numOfDeletedFriend) {
      return Promise.reject(serverError('Unable to delete friend'));
    }
  },

  mapFriendRequestViewModel(
    friendAttributes: IFriendRequestViewModel,
    favFoodId: number
  ): IFriendRequestModel {
    const { name, email, comment, relationshipStatusId } = friendAttributes;

    return { name, email, comment, favFoodId, relationshipStatusId };
  }
};
