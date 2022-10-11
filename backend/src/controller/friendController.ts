import { Request, Response, NextFunction } from 'express';
import { friendService } from '../services/friendService';

export const friendController = {
  async getFriendsWithAllAttributes(
    _req: Request,
    res: Response,
    _next: NextFunction
  ) {
    const friends = await friendService.getFriendsWithAllAttributes();
    res.status(200).json({ friendList: friends });
  }
};
