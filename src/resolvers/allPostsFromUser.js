const { Post } = require("../models");

const allPostsFromUser = async () => {
  return await Post.find({ postedBy: "61082fd546c13a67d0edebfe" });
};
module.exports = allPostsFromUser;
