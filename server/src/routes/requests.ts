import { Router } from 'express';
import { db } from '../db';
import Joi from 'joi';
import { v4 as uuid } from 'uuid';

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
  res.status(200).json({ success: true, data: items });
});

router.post('/', async (req, res) => {
  const { error, value } = createSchema.validate(req.body);
  if (error) return res.status(400).json({ success: false, message: error.message });
  const created = await db.createRequest(value);
  res.status(201).json({ success: true, data: created });
});

export default router;
