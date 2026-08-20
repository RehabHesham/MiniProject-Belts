import HTTPError from '../util/HttpError.js';

export default (req, res, next) => {
  // req.user
  const user = req.user;
  const { id } = req.params;

  // check user is owner or admin
  if (user._id.toString() !== id && user.role !== 'admin')
    return next(new HTTPError(403, 'Insufficient permission'));

  next();
};
