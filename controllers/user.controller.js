import User from '../models/user.js';
import HTTPError from '../util/HttpError.js';

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json({
      count: users.length,
      data: users,
    });
  } catch (err) {
    next(err);
  }
};
export const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) next(new HTTPError(404, 'user not found'));
    return res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
export const createUser = async (req, res, next) => {
  try {
    console.log(req.body);
    const { name, email, password } = req.body;
    // create new user
    const user = await User.create({
      name,
      email,
      password,
      role: 'admin',
    });
    return res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};
export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = await User.findById(id);
    if (!user) next(new HTTPError(404, 'user not found'));

    user.name = name || user.name;
    user.email = email || user.email;

    await user.save();
    return res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const updatePassword = async (req, res, next) => {
  const { oldPassword, newPassword } = req.body;
};
export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) next(new HTTPError(404, 'user not found'));

    await user.deleteOne();
    return res.status(204).send();
  } catch (err) {
    next(err);
  }
};
