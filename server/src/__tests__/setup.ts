import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { initMongo } from '../db';

let mongo: MongoMemoryServer | null = null;

beforeAll(async () => {
  try {
    mongo = await MongoMemoryServer.create();
    process.env.MONGODB_URI = mongo.getUri();
    await initMongo();
    process.env.DB_READY = '1';
  } catch (e) {
    try {
      process.env.MONGODB_URI = 'mongodb://127.0.0.1:27017/find_donor_test';
      await initMongo();
      process.env.DB_READY = '1';
    } catch {
      process.env.DB_READY = '0';
    }
  }
});

afterAll(async () => {
  if (process.env.DB_READY === '1') {
    await mongoose.connection.close();
  }
  if (mongo) {
    await mongo.stop();
  }
});

