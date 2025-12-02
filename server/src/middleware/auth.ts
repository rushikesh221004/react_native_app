import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const SECRET = process.env.JWT_SECRET || 'dev-secret';

export const signToken = (payload: object) => jwt.sign(payload, SECRET, { expiresIn: '7d' });

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : '';
  if (!token) return res.status(401).json({ success: false, message: 'Unauthorized' });
  try {
    const decoded = jwt.verify(token, SECRET) as any;
    (req as any).user = decoded;
    next();
  } catch {
    return res.status(401).json({ success: false, message: 'Invalid token' });
  }
};

