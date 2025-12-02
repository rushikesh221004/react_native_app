import { Router } from 'express';
import { db } from '../db';
import Joi from 'joi';

const router = Router();

router.get('/', async (_req, res) => {
  const donors = await db.listDonors();
  res.status(200).json({ success: true, data: donors.map(d => ({ id: String((d as any)._id), name: (d as any).name, location: (d as any).location, bloodGroup: (d as any).bloodGroup, rating: (d as any).rating })) });
});

const donorCreateSchema = Joi.object({
  name: Joi.string().required(),
  location: Joi.string().required(),
  bloodGroup: Joi.string().required(),
  rating: Joi.number().min(0).max(5).default(0),
});

router.post('/', async (req, res) => {
  const { error, value } = donorCreateSchema.validate(req.body);
  if (error) return res.status(400).json({ success: false, message: error.message });
  const created = await db.createDonor(value);
  res.status(201).json({ success: true, data: { id: String((created as any)._id) } });
});

router.put('/:id', async (req, res) => {
  const updated = await db.updateDonor(req.params.id, req.body);
  if (!updated) return res.status(404).json({ success: false, message: 'Donor not found' });
  res.status(200).json({ success: true, data: { id: String((updated as any)._id) } });
});

router.delete('/:id', async (req, res) => {
  const deleted = await db.deleteDonor(req.params.id);
  if (!deleted) return res.status(404).json({ success: false, message: 'Donor not found' });
  res.status(204).send();
});

export default router;
