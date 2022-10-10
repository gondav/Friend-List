import Friend from '../models/friend.model';
import { friendRepository } from '../repositories/friendRepository';
import { notFoundError, serverError } from './errorCreatorService';

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

  async createFriend() {},

  async updateFriend() {},

  async deleteFriend(id: number): Promise<void> {
    const numOfDeletedFriend = await friendRepository.deleteFriend(id);

    if (!numOfDeletedFriend) {
      return Promise.reject(serverError('Unable to delete friend'));
    }
  }
};
