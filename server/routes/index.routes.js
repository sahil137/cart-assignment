import express from 'express';
import cartRoutes from './cart.routes.js';
import adminRoutes from './admin.routes.js';
import authRoutes from './auth.routes.js';

const router = express.Router();

router.use('/api/cart', cartRoutes);
router.use('/api/admin', adminRoutes);
router.use('/api/auth', authRoutes);

export default router;
