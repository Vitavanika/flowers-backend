import express from 'express';
import { getFlowers, createFlower } from '../controllers/flowersController.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createFlowerSchema } from '../validation/schemas.js';

const router = express.Router();

router.get('/', getFlowers);
router.post('/', validateBody(createFlowerSchema), createFlower);

export default router;
