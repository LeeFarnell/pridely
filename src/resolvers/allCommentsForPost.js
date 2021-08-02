const { PostComment } = require("../models");

const allCommentsForPost = async () => {
  return await PostComment.find({
    postId: "610861d1dadfdd579ccd3c7d",
  });
};
module.exports = allCommentsForPost;
