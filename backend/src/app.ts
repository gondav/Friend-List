import express from 'express';
import errorHandler from './middlewares/errorHandler';
import { friendRouter } from './routes/friend.routes';

const app = express();
app.use(express.json());

app.use('/api', friendRouter);

app.use(errorHandler);

export default app;
