import express from 'express';
import {
  createDiscountCode,
  getStats,
} from '../controllers/cart-controller.js';
import { isAdmin, userAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

router.get('/stats', userAuthenticated, isAdmin, getStats);
router.get(
  '/create-discount-code',
  userAuthenticated,
  isAdmin,
  createDiscountCode
);

export default router;
