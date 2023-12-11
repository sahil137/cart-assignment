import express from 'express';
import cartRoutes from './cart.routes.js';
import adminRoutes from './admin.routes.js';

const router = express.Router();

router.use('/api/cart', cartRoutes);
router.use('/api/admin', adminRoutes);

export default router;
