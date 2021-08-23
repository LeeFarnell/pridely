const { Post } = require("../models");

const createPost = async (_, { input }) => {
  const { postedBy, title, subtitle, mainText, image, badges, url } = input;

  const newPost = await Post.create({
    postedBy,
    title,
    subtitle,
    mainText,
    image,
    badges,
    url,
  }).populate("likes");

  return { newPost };
};

module.exports = createPost;
