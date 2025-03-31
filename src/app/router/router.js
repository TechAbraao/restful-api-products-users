import { Router } from 'express';
import productRoute from './endpoints/productRoute.js';
import userRoute from './endpoints/userRoute.js';

const router = Router();

router.use(productRoute)
router.use(userRoute)

export default router;