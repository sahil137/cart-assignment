import express from 'express';
import { addItemsToCart } from '../controllers/cart-controller.js';

const router = express.Router();

router.post('/add', addItemsToCart);

export default router;
