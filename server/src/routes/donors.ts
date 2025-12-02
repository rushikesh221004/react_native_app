import { Router } from 'express';
import { db } from '../db';

const router = Router();

router.get('/', async (_req, res) => {
  const donors = await db.listDonors();
  res.status(200).json({ success: true, data: donors });
});

export default router;
