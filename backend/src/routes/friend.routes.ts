import express from 'express';
import errorChecker from '../middlewares/errorChecker';
import { friendController } from '../controller/friendController';

export const friendRouter = express.Router();

friendRouter.get(
  '/friends',
  errorChecker(friendController.getFriendsWithAllAttributes)
);
friendRouter.get(
  '/friends/:id',
  errorChecker(friendController.getFriendWithAllAttributes)
);
friendRouter.post('/friends', errorChecker(friendController.createFriend));
friendRouter.put('/friends/:id', errorChecker(friendController.updateFriend));
friendRouter.delete(
  '/friends/:id',
  errorChecker(friendController.deleteFriend)
);
