const { Post } = require("../models");

const editPost = async (_, { input }) => {
  const { title, subtitle, mainText, image, badges, url } = input;

  const updatePost = await Post.findByIdAndUpdate(
    "6107fb24cb460159b45a721b",
    {
      $set: { title, subtitle, mainText, image, badges, url },
    },
    { new: true }
  );

  return { updatePost };
};

module.exports = editPost;
