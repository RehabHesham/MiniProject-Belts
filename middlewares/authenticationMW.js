import jwt from 'jsonwebtoken';
import HTTPError from '../util/HttpError.js';
import User from '../models/user.js';

export default async (req, resizeBy, next) => {
  try {
    // access authorization header
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    if (!authHeader) next(new HTTPError(401, 'Unauthorized user'));

    // access jwt token
    const accessToken = authHeader.split(' ')[1];
    if (!accessToken) next(new HTTPError(401, 'Unauthorized user'));

    let payload;
    try {
      // validate access token
      payload = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
    } catch (err) {
      next(new HTTPError(401, 'Invalid access token'));
    }
    // authenticated user
    const user = await User.findById(payload.userId);
    if (!user) next(new HTTPError(404, 'User not found'));

    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};
