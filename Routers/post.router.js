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

const router = Router();

//  api/v1/posts
// post
router.get('/', getAllPosts);
router.post('/', createPost); // validate req.body

// router.get('/:id', getPostById);// validate objectId
// router.patch('/:id', updatePost);   // validate req.body
// router.delete('/:id', deletePost);// validate objectId

// like
// router.post('/:id/like', likePost);// validate objectId
// router.post('/:id/unlike', unlikePost); // validate objectId

// comment
// router.get('/:id/comments', getAllPostComments);// validate objectId
router.post(
  '/:id/comments',
  validateMongoId('id'),
  validationResults,
  createComment,
); // validate objectId  // validate req.body

// router.get('/:id/comments/:cId', getCommentById); // validate objectId
// router.patch('/:id/comments/:cId', updateComment); // validate req.body // validate objectId
router.delete(
  '/:id/comments/:cId',
  validateMongoId('id'),
  validateMongoId('cId'),
  validationResults,
  deleteComment,
); // validate objectId

export default router;
