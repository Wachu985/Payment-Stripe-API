import { Router } from 'express';
import { calcelSession, createSesion, successSesion } from '../controllers/payment.controllers.js';

const router = Router()

router.post('/create-session', createSesion)
router.get('/success', successSesion)
router.get('/cancel', calcelSession)

export default router