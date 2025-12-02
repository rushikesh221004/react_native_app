import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../../.env') });
dotenv.config();
import app from './server';
import { initMongo } from './db';

if (!process.env.MONGODB_URI) {
  const host = process.env.DB_HOST;
  const name = process.env.DB_NAME;
  const user = process.env.DB_USER;
  const pass = process.env.DB_PASSWORD;
  if (host && name) {
    process.env.MONGODB_URI = user && pass ? `mongodb://${user}:${pass}@${host}/${name}` : `mongodb://${host}/${name}`;
  }
}

const port = process.env.PORT ? Number(process.env.PORT) : 5000;

(async () => {
  await initMongo().catch(() => {});
  app.listen(port, () => {});
})();
