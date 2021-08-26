const Post = require("../models/Post");

// add the user id and the post id for the liked post to the array of likes
const likeAPost = async (_, args, context) => {
  const { id } = context.user;

  try {
    return await Post.findByIdAndUpdate(
      { _id: args.postId },
      { $addToSet: { likes: id } },
      { new: true, runValidators: true }
    )
      .populate("likes")
      .populate("postedBy");
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = likeAPost;
