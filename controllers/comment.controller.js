import Post from '../models/post.js';
import HTTPError from '../util/HttpError.js';

export const getAllPostComments = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
export const getCommentById = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
export const updateComment = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
export const createComment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    const { user } = req.body;

    console.log('create comment');
    const post = await Post.findById(id);
    if (!post) next(new HTTPError(404, 'post not found'));

    post.comments.push({
      content,
      user,
    });

    await post.save();
    return res.status(201).json({
      message: 'comment added',
    });
  } catch (err) {
    next(err);
  }
};
export const deleteComment = async (req, res, next) => {
  try {
    const { id, cId } = req.params;

    const post = await Post.findById(id);
    if (!post) next(new HTTPError(404, 'post not found'));

    const comment = post.comments.id(cId);
    if (!comment) next(new HTTPError(404, 'comment not found'));

    await comment.deleteOne();
    await post.save();

    return res.status(204).send();
  } catch (err) {
    next(err);
  }
};
