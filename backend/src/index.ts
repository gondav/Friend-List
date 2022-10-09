import app from './app';
import dotenv from 'dotenv';
import { db } from './data/database';

dotenv.config();
const PORT = process.env.PORT || 3000;

db.checkConnection();

app.listen(PORT, () => console.log('Server started on port', PORT));
