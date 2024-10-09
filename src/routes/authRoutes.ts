import { Router } from 'express';
import { login, register } from "../controllers/authController"

const router = Router();

// Define authentication routes
router.post('/login', login);
router.post('/register', register);

export const authRoutes = router;