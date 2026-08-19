import Post from '../models/post.js';

export const getAllPosts = async (req, res, next) => {
  try {
    // page number                         => skip
    // limit(number of items in each page) => limit
    const { page, limit } = req.query;

    /**
     * page 1  => skip limit*0 =>0
     * page 2  => skip limit*1 => 2
     * page 3  => skip limit*2 => 4
     */
    const skip = limit * (page - 1);
    const posts = await Post.find().skip(skip).limit(limit);

    const total = await Post.countDocuments();
    const pages = Math.ceil(total / limit);
    return res.status(200).json({
      total, // how many posts
      pages, // total number of pages
      page, // number of current page
      posts, // posts in current page
    });
  } catch (err) {
    next(err);
  }
};
export const getPostById = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
export const createPost = async (req, res, next) => {
  try {
    const { content, tags } = req.body;
    //TODO: need to change where we get userId
    const { user } = req.body;

    const post = await Post.create({
      content,
      tags,
      user,
    });
    return res.status(201).json(post);
  } catch (err) {
    next(err);
  }
};
export const updatePost = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
export const deletePost = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
export const likePost = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
export const unlikePost = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
