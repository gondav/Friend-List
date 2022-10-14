import express from 'express';
import cors from 'cors';
import errorHandler from './middlewares/errorHandler';
import { friendRouter } from './routes/friend.routes';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', friendRouter);

app.use(errorHandler);

export default app;
