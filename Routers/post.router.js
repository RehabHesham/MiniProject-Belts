import { Router } from 'express';
import {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  likePost,
  unlikePost,
} from '../controllers/post.controller.js';
import {
  getAllPostComments,
  getCommentById,
  updateComment,
  createComment,
  deleteComment,
} from '../controllers/comment.controller.js';
import { validateMongoId } from '../validators/validateObjectId.js';
import validationResults from '../validators/validationResults.js';
import authenticationMW from '../middlewares/authenticationMW.js';
import authorizationMW from '../middlewares/authorizationMW.js';
import isCommentOwner from '../middlewares/isCommentOwner.js';

const router = Router();

//  api/v1/posts
// post
router.get('/', getAllPosts);
router.post('/', authenticationMW, authorizationMW('user'), createPost); // validate req.body

// router.get('/:id', getPostById);// validate objectId
// router.patch('/:id',authenticationMW,authorizationMW('user'), updatePost);   // validate req.body
// router.delete('/:id',authenticationMW,authorizationMW('user',"admin"), deletePost);// validate objectId

// like
// router.post('/:id/like',authenticationMW, likePost);// validate objectId
// router.post('/:id/unlike',authenticationMW, unlikePost); // validate objectId

// comment
// router.get('/:id/comments', getAllPostComments);// validate objectId
router.post(
  '/:id/comments',
  authenticationMW,
  authorizationMW('user'),
  validateMongoId('id'),
  validationResults,
  createComment,
); // validate objectId  // validate req.body

// router.get('/:id/comments/:cId', getCommentById); // validate objectId
// router.patch('/:id/comments/:cId',authenticationMW,authorizationMW('user'),isCommentOwner, updateComment); // validate req.body // validate objectId
router.delete(
  '/:id/comments/:cId',
  authenticationMW,
  authorizationMW('user', 'admin'),
  validateMongoId('id'),
  validateMongoId('cId'),
  validationResults,
  isCommentOwner,
  deleteComment,
); // validate objectId

export default router;
