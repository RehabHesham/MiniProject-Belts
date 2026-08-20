import { Router } from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/user.controller.js';
import { createUserValidations } from '../validators/userValidations.js';
import validationResults from '../validators/validationResults.js';
import { validateMongoId } from '../validators/validateObjectId.js';
import authenticationMW from '../middlewares/authenticationMW.js';
import authorizationMW from '../middlewares/authorizationMW.js';
import isOwnerUserMW from '../middlewares/isOwnerUserMW.js';

const router = Router();

router.get('/', authenticationMW, authorizationMW('admin'), getAllUsers);
router.post(
  '/createAdmin',
  authenticationMW,
  authorizationMW('admin'),
  createUserValidations,
  validationResults,
  createUser,
); // validate req.body

router.get(
  '/:id',
  authenticationMW,
  authorizationMW('admin', 'user'),
  validateMongoId('id'),
  validationResults,
  getUserById,
); // validate objectId
router.put(
  '/:id',
  authenticationMW,
  authorizationMW('user'),
  validateMongoId('id'),
  validationResults,
  isOwnerUserMW,
  updateUser,
); // validate req.body  // validate objectId
router.delete(
  '/:id',
  authenticationMW,
  authorizationMW('user', 'admin'),
  validateMongoId('id'),
  validationResults,
  isOwnerUserMW,
  deleteUser,
); // validate objectId

export default router;
