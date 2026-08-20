import { Router } from 'express';
import { registerUser, login, logout } from '../controllers/Auth.controller.js';
import { createUserValidations } from '../validators/userValidations.js';
import validationResults from '../validators/validationResults.js';

const router = Router();

// /api/v1/auth  from router mounting
router.post(
  '/register',
  createUserValidations,
  validationResults,
  registerUser,
);
router.post('/login', login);
router.post('/logout', logout);

export default router;
