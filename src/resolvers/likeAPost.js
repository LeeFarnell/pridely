const Post = require("../models/Post");

const likeAPost = async (_, args, context) => {
  const { id } = context.user;

  try {
    return await Post.findByIdAndUpdate(
      { _id: args.postId },
      { $addToSet: { likes: id } },
      { new: true, runValidators: true }
    ).populate("likes");
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = likeAPost;
