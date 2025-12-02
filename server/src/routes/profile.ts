import { Router } from 'express';
import { db } from '../db';

const router = Router();

router.get('/', async (req, res) => {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : '';
  if (!token) return res.status(200).json({ success: true, data: { donations: [], profileName: '', userId: '', user: null } });
  try {
    const { id } = (require('jsonwebtoken').verify(token, process.env.JWT_SECRET || 'dev-secret') as any);
    const user = await db.findUserById(id);
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });
    const donations = await db.getDonationsForUser(String((user as any)._id));
    res.status(200).json({ success: true, data: { donations, profileName: (user as any).fullName, userId: String((user as any)._id), user } });
  } catch {
    return res.status(401).json({ success: false, message: 'Invalid token' });
  }
});

router.patch('/availability', async (req, res) => {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : '';
  if (!token) return res.status(401).json({ success: false, message: 'Unauthorized' });
  try {
    const { available } = req.body || {};
    if (typeof available !== 'boolean') return res.status(400).json({ success: false, message: 'available must be boolean' });
    const { id } = (require('jsonwebtoken').verify(token, process.env.JWT_SECRET || 'dev-secret') as any);
    const updated = await db.setUserAvailability(id, available);
    if (!updated) return res.status(404).json({ success: false, message: 'User not found' });
    res.status(200).json({ success: true, data: { user: updated } });
  } catch {
    return res.status(401).json({ success: false, message: 'Invalid token' });
  }
});

export default router;
