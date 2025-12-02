import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import authRouter from './routes/auth';
import donorsRouter from './routes/donors';
import requestsRouter from './routes/requests';
import profileRouter from './routes/profile';
import { errorHandler } from './middleware/error';
import { initMongo } from './db';

const app = express();

app.use(helmet());

const allowedOrigins = [
  'http://localhost:8081',
  'http://127.0.0.1:8081',
];

const corsOptions: cors.CorsOptions = {
  origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(express.json());
app.use(morgan('combined'));

app.get('/health', (_req, res) => {
  res.status(200).json({ success: true, data: { status: 'ok', uptime: process.uptime() } });
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/donors', donorsRouter);
app.use('/api/v1/requests', requestsRouter);
app.use('/api/v1/profile', profileRouter);

app.use(errorHandler);

export default app;

