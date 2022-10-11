import { Request, Response, NextFunction } from 'express';
import { badRequestError } from '../services/errorCreatorService';
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
  }
};
