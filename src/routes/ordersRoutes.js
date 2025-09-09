import express from 'express';
import {
  createOrder,
  getOrderById,
  getOrdersByEmail,
} from '../controllers/ordersController.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createFlowerSchema } from '../validation/schemas.js';

const router = express.Router();

router.post('/', validateBody(createFlowerSchema), createOrder);
router.get('/:id', getOrderById);
router.get('/', getOrdersByEmail);

export default router;
