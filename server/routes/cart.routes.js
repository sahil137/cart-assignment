import express from 'express';
import {
  addItemsToCart,
  checkOut,
  getCart,
} from '../controllers/cart-controller.js';
import { userAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

router.post('/add', userAuthenticated, addItemsToCart);
router.post('/checkout', userAuthenticated, checkOut);
router.get('/get-cart', userAuthenticated, getCart);

export default router;
