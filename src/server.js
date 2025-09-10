import cors from 'cors';
import dotenv from 'dotenv';
import pino from 'pino-http';
import express from 'express';
import cookieParser from 'cookie-parser';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import flowersRoutes from './routes/flowersRoutes.js';
import ordersRoutes from './routes/ordersRoutes.js';

dotenv.config();

export const setupServer = async () => {
  const app = express();

  app.use(
    cors({
      origin: [
        'http://localhost:5173',
        'https://flowers-frontend-mu.vercel.app',
      ],
    }),
  );
  app.use(cookieParser());
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );
  app.use(express.json());

  app.get('/', (req, res) => {
    res.send('Flower Delivery API is running...');
  });
  app.use('/api/flowers', flowersRoutes);
  app.use('/api/orders', ordersRoutes);

  app.use(notFoundHandler);
  app.use(errorHandler);

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};
