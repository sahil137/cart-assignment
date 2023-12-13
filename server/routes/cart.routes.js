import express from 'express';
import { addItemsToCart, checkOut } from '../controllers/cart-controller.js';

const router = express.Router();

router.post('/add', addItemsToCart);
router.post('/checkout', checkOut);

export default router;
