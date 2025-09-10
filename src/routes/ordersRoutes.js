import express from 'express';
import {
  createOrder,
  getOrderById,
  getOrdersByEmail,
} from '../controllers/ordersController.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createOrderSchema } from '../validation/schemas.js';

const router = express.Router();

router.post('/', validateBody(createOrderSchema), createOrder);
router.get('/:id', getOrderById);
router.get('/', getOrdersByEmail);

export default router;
