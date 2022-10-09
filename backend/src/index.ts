import app from './app';
import dotenv from 'dotenv';
import { db } from './data/database';

dotenv.config();
const PORT = process.env.PORT || 3000;

db.checkConnection();
db.synchronizeModels();
// db.fillUpTablesWithMockedData();

app.listen(PORT, () => console.log('Server started on port', PORT));
