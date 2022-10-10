import Friend from '../models/friend.model';
import { friendRepository } from '../repositories/friendRepository';
import { notFoundError } from './errorCreatorService';

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
  }
};
