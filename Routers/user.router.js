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

const router = Router();

router.get('/', getAllUsers);
router.post('/', createUserValidations, validationResults, createUser); // validate req.body

router.get('/:id', validateMongoId('id'), validationResults, getUserById); // validate objectId
router.put('/:id', validateMongoId('id'), validationResults, updateUser); // validate req.body  // validate objectId
router.delete('/:id', validateMongoId('id'), validationResults, deleteUser); // validate objectId

export default router;
