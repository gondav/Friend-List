import express from 'express';
import { friendController } from '../controller/friendController';

export const friendRouter = express.Router();

friendRouter.get('/friends', friendController.getFriendsWithAllAttributes);
friendRouter.get('/friends/:id', friendController.getFriendWithAllAttributes);
friendRouter.post('/friends', friendController.createFriend);
friendRouter.put('/friends/:id', friendController.updateFriend);
friendRouter.delete('/friends/:id', friendController.deleteFriend);
