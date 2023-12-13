import express from 'express';
import {
  createDiscountCode,
  getStats,
} from '../controllers/cart-controller.js';

const router = express.Router();

router.get('/stats', getStats);
router.get('/create-discount-code', createDiscountCode);

export default router;
