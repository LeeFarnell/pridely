const { PostComment } = require("../models");

// should return all comments for post. hardcoded to test. currently unused
const allCommentsForPost = async () => {
  return await PostComment.find({
    postId: "610861d1dadfdd579ccd3c7d",
  });
};
module.exports = allCommentsForPost;
