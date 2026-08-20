import Post from '../models/post.js';
import HTTPError from '../util/HttpError.js';

export default async (req, res, next) => {
  const user = req.user;
  const { id, cId } = req.params;

  const post = await Post.findById(id);
  if (!post) return next(new HTTPError(404, 'post not found'));

  const comment = await post.comments.id(cId);
  if (!comment) return next(new HTTPError(404, 'comment not found'));

  console.log(user._id.toString());
  console.log(comment.user.toString());
  console.log(user._id.toString() !== comment.user.toString());

  // id user = id comment  next
  //
  if (
    user._id.toString() !== comment.user.toString() &&
    user._id.toString() !== post.user.toString() &&
    user.role != 'admin'
  )
    return next(new HTTPError(403, 'Insufficient permission'));

  next();
};
