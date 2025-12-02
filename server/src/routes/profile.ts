import { Router } from 'express';
import { db } from '../db';

const router = Router();

router.get('/', async (_req, res) => {
  await db.seedDefaultUser();
  const user = await db.findUserByEmail('demo@example.com');
  const donations = await db.getDonationsForUser(user as any);
  res.status(200).json({ success: true, data: { donations, profileName: (user as any).fullName, userId: (user as any)._id || (user as any).id } });
});

export default router;
