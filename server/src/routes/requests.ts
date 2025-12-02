import { Router } from 'express';
import { db } from '../db';
import Joi from 'joi';

const router = Router();

const createSchema = Joi.object({
  patientName: Joi.string().min(2).required(),
  bloodType: Joi.string().required(),
  age: Joi.number().integer().min(0).required(),
  diseaseName: Joi.string().required(),
  location: Joi.string().required(),
  contactNumber: Joi.string().min(6).required(),
});

router.get('/', async (_req, res) => {
  const items = await db.listRequests();
  res.status(200).json({ success: true, data: items.map(r => ({ id: String((r as any)._id), patientName: (r as any).patientName, bloodType: (r as any).bloodType, age: (r as any).age, diseaseName: (r as any).diseaseName, location: (r as any).location, contactNumber: (r as any).contactNumber, createdAt: ((r as any).createdAt?.toISOString?.() || new Date().toISOString()) })) });
});

router.post('/', async (req, res) => {
  const { error, value } = createSchema.validate(req.body);
  if (error) return res.status(400).json({ success: false, message: error.message });
  const created = await db.createRequest(value);
  res.status(201).json({ success: true, data: { id: String((created as any)._id) } });
});

router.put('/:id', async (req, res) => {
  const updated = await db.updateRequest(req.params.id, req.body);
  if (!updated) return res.status(404).json({ success: false, message: 'Request not found' });
  res.status(200).json({ success: true, data: { id: String((updated as any)._id) } });
});

router.delete('/:id', async (req, res) => {
  const deleted = await db.deleteRequest(req.params.id);
  if (!deleted) return res.status(404).json({ success: false, message: 'Request not found' });
  res.status(204).send();
});

export default router;
