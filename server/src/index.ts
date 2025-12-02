import dotenv from 'dotenv';
dotenv.config();
import app from './server';
import { initMongo } from './db';

const port = process.env.PORT ? Number(process.env.PORT) : 4000;

initMongo().finally(() => {
  app.listen(port, () => {});
});
