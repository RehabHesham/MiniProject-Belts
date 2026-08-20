import User from '../models/user.js';
import HTTPError from '../util/HttpError.js';
import jwt from 'jsonwebtoken';

export const registerUser = async (req, res, next) => {
  try {
    // console.log('create user');
    const { name, email, password } = req.body;

    const user = await User.create({
      name,
      email,
      password,
    });

    return res.status(201).json({
      message: 'Account created',
    });
  } catch (err) {
    next(err);
  }
};
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return next(new HTTPError(401, 'wrong email or password'));

    const isMatched = await user.comparePassword(password);
    if (!isMatched) return next(new HTTPError(401, 'wrong email or password'));

    // authenticated user
    const accessToken = await jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: process.env.JWT_EXPIRE,
      },
    );
    return res.status(200).json({
      message: 'Login successfully',
      accessToken,
    });
  } catch (err) {
    next(err);
  }
};
export const logout = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
