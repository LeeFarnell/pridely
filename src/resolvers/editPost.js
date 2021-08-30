const { Post } = require("../models");

// this will target a specific post and update its content. Currently unused, hardcoded to test in Apollo playground.
const editPost = async (_, { input }) => {
  const { title, subtitle, mainText, image, badges, url } = input;

  try {
    const updatePost = await Post.findByIdAndUpdate(
      "6107fb24cb460159b45a721b",
      {
        $set: { title, subtitle, mainText, image, badges, url },
      },
      { new: true }
    );

    return { updatePost };
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = editPost;
