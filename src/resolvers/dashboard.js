const mongoose = require("mongoose");
const { User, Post, PostComment, Follower } = require("../models");

const dashboard = async (_, args, context) => {
  const { id } = context.user;

  try {
    const user = await User.findById(id);

    const followersFromDb = await Follower.find({ businessId: id }).populate(
      "followerId"
    );

    const followers = followersFromDb.map((follower) => {
      return follower.followerId;
    });

    const followersPostPromises = followers.map(async (follower) => {
      return await Post.find({ postedBy: follower._id }).lean();
    });

    const followersPosts = await Promise.all(followersPostPromises);

    const flattenedFollowersPosts = followersPosts.flat();

    const followerPostsIds = flattenedFollowersPosts.map((post) => {
      return post._id;
    });

    const comments = await PostComment.find({
      postId: { $in: followerPostsIds },
    })
      .populate("commentPostedBy")
      .populate("likes");

    const posts = flattenedFollowersPosts.map((post) => {
      const newPost = { ...post };

      const postComments = comments.filter((comment) => {
        return post._id.equals(mongoose.Types.ObjectId(comment.postId));
      });

      newPost.comments = postComments;

      return newPost;
    });

    return {
      currentUser: user,
      followers,
      posts,
    };
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = dashboard;
