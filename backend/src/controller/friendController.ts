import { Request, Response, NextFunction } from 'express';
import {
  badRequestError,
  notAcceptableError
} from '../services/errorCreatorService';
import { friendService } from '../services/friendService';

export const friendController = {
  async getFriendsWithAllAttributes(
    _req: Request,
    res: Response,
    _next: NextFunction
  ) {
    const friends = await friendService.getFriendsWithAllAttributes();
    res.status(200).json({ friendList: friends });
  },

  async getFriendWithAllAttributes(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const friendId = Number(req.params.id);

    if (isNaN(friendId) || friendId < 1) {
      return next(badRequestError('Friend id needs to be a positive integer'));
    }
    const friend = await friendService.getFriendWithAllAttributes(friendId);

    res.status(200).json({ friend });
  },

  async createFriend(req: Request, res: Response, next: NextFunction) {
    const friendAttributes = req.body;
    friendAttributes.comment = friendAttributes.comment || '';

    if (
      !friendAttributes ||
      !friendAttributes.name ||
      !friendAttributes.email ||
      !friendAttributes.favFood ||
      !friendAttributes.relationshipStatusId
    ) {
      return next(
        badRequestError(
          'Please provide name, email, comment, favorite food and relationship status'
        )
      );
    }

    if (!friendController.checkEmail(friendAttributes.email)) {
      return next(notAcceptableError('Please enter a valid email address'));
    }

    const relationshipId = friendAttributes.relationshipId;

    if (relationshipId < 1 || relationshipId > 3) {
      return next(badRequestError('Relationship id must be 1, 2 or 3'));
    }

    await friendService.createFriend(friendAttributes);

    res.status(201).json({ message: 'Friend added successfully' });
  },

  async updateFriend(req: Request, res: Response, next: NextFunction) {
    const friendAttributes = req.body;
    const id = Number(req.params.id);
    friendAttributes.comment = friendAttributes.comment || '';

    if (!id || isNaN(id) || id < 1) {
      return next(badRequestError('Friend id needs to be a positive integer'));
    }

    if (
      !friendAttributes ||
      !friendAttributes.name ||
      !friendAttributes.email ||
      !friendAttributes.favFood ||
      !friendAttributes.relationshipStatusId
    ) {
      return next(
        badRequestError(
          'Please provide name, email, comment, favorite food and relationship status'
        )
      );
    }

    if (!friendController.checkEmail(friendAttributes.email)) {
      return next(notAcceptableError('Please enter a valid email address'));
    }

    const relationshipId = friendAttributes.relationshipId;

    if (relationshipId < 1 || relationshipId > 3) {
      return next(badRequestError('Relationship id must be 1, 2 or 3'));
    }

    await friendService.updateFriend(id, friendAttributes);

    res.status(200).json({ message: 'Friend updated successfully' });
  },

  async deleteFriend(req: Request, res: Response, next: NextFunction) {
    const id = Number(req.params.id);

    if (!id || isNaN(id) || id < 1) {
      return next(badRequestError('Friend id needs to be a positive integer'));
    }

    await friendService.deleteFriend(id);

    res.status(200).json({ message: 'Friend deleted successfully' });
  },

  checkEmail(email: string): boolean {
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailPattern.test(email);
  }
};
