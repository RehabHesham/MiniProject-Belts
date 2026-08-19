import { Schema, model } from 'mongoose';

const commentSchema = new Schema(
  {
    content: {
      type: String,
      required: [true, 'Content is required'],
      maxlength: [100, "post can't exceed 100 char"],
    },
    user: {
      // reference
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Comment must have user'],
    },
  },
  { timestamps: true },
);

const postSchema = new Schema(
  {
    content: {
      type: String,
      required: [true, 'Content is required'],
      maxlength: [300, "post can't exceed 300 char"],
    },
    tags: {
      type: [
        {
          type: String,
          minlength: [2, 'tag at least 2 char'],
          maxlength: [30, 'tag at most 30 char'],
          match: [
            /^[a-zA-Z0-9 ]*$/,
            'Tag only contains letters, numbers and space',
          ],
        },
      ],
      default: [],
      validate: {
        validator: (value) => {
          return value.length <= 5;
        },
        message: 'post can have at most 5 tags',
      },
    },
    likes: [
      // reference
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    user: {
      // reference
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Post must have user'],
    },
    comments: [commentSchema],
  },
  { timestamps: true },
);

export default model('Post', postSchema);

// {
//   content: "post about .....",
//   tags: ["sport","football","match"],
// }
