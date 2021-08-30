const { Post } = require("../models");

// creates a post
const createPost = async (_, { input }) => {
  const { postedBy, title, subtitle, mainText, image, badges, url } = input;

  // get the new post data from the input and create the post
  try {
    const newPost = await Post.create({
      postedBy,
      title,
      subtitle,
      mainText,
      image,
      badges,
      url,
    });

    return { newPost };
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = createPost;
