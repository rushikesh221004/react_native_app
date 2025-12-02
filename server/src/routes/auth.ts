import { Router } from 'express';
import Joi from 'joi';
import bcrypt from 'bcryptjs';
import { db } from '../db';
import { requireAuth, signToken } from '../middleware/auth';

const router = Router();

const registerSchema = Joi.object({
  fullName: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  mobileNo: Joi.string().min(8).required(),
  location: Joi.string().required(),
  bloodGroup: Joi.string().required(),
  gender: Joi.string().valid('male', 'female', 'other').required(),
  password: Joi.string().min(6).required(),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
});

router.post('/register', async (req, res) => {
  const { error, value } = registerSchema.validate(req.body);
  if (error) return res.status(400).json({ success: false, message: error.message });
  const exists = await db.findUserByEmail(value.email);
  if (exists) return res.status(409).json({ success: false, message: 'Email already registered' });
  const created = await db.createUser({
    fullName: value.fullName,
    email: value.email,
    mobileNo: value.mobileNo,
    location: value.location,
    bloodGroup: value.bloodGroup,
    gender: value.gender,
    password: value.password,
  });
  res.status(201).json({ success: true, data: { id: (created as any)._id || (created as any).id } });
});

const loginSchema = Joi.object({ email: Joi.string().email().required(), password: Joi.string().required() });

router.post('/login', async (req, res) => {
  const { error, value } = loginSchema.validate(req.body);
  if (error) return res.status(400).json({ success: false, message: error.message });
  const user = await db.findUserByEmail(value.email);
  if (!user) return res.status(401).json({ success: false, message: 'Invalid credentials' });
  const ok = await bcrypt.compare(value.password, (user as any).passwordHash);
  if (!ok) return res.status(401).json({ success: false, message: 'Invalid credentials' });
  const token = signToken({ id: (user as any)._id || (user as any).id, email: (user as any).email });
  res.status(200).json({ success: true, data: { token } });
});

router.get('/profile', async (req, res) => {
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

router.get('/me', requireAuth, async (req, res) => {
  const { id } = (req as any).user;
  const user = await db.findUserById(id);
  if (!user) return res.status(404).json({ success: false, message: 'User not found' });
  res.status(200).json({ success: true, data: { user } });
});

const availabilitySchema = Joi.object({ available: Joi.boolean().required() });

router.patch('/availability', requireAuth, async (req, res) => {
  const { error, value } = availabilitySchema.validate(req.body);
  if (error) return res.status(400).json({ success: false, message: error.message });
  const { id } = (req as any).user;
  const updated = await db.setUserAvailability(id, value.available);
  if (!updated) return res.status(404).json({ success: false, message: 'User not found' });
  res.status(200).json({ success: true, data: { user: updated } });
});

export default router;
