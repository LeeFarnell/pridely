const mongoose = require("mongoose");
const { User, Post, PostComment, Follower } = require("../models");

const dashboard = async (_, args, context) => {
  const { id } = context.user;

  try {
    // we find the current user by the id in the context
    const user = await User.findById(id);

    // we find all followers for the current user
    const followersFromDb = await Follower.find({ businessId: id }).populate(
      "followerId"
    );

    // we get the id for every follower
    const followers = followersFromDb.map((follower) => {
      return follower.followerId;
    });

    // we map through every follower id, get their posts, clean up the response
    const followersPostPromises = followers.map(async (follower) => {
      return await Post.find({ postedBy: follower._id })
        .populate("likes")
        .populate("postedBy")
        .lean();
    });

    // we promisify the response
    const followersPosts = await Promise.all(followersPostPromises);

    // flatten the array
    const flattenedFollowersPosts = followersPosts.flat();

    // map through posts, return all of their id's
    const followerPostsIds = flattenedFollowersPosts.map((post) => {
      return post._id;
    });

    // for each post we retrieve the comments
    const comments = await PostComment.find({
      postId: { $in: followerPostsIds },
    }).populate("commentPostedBy");

    // flatten the array, spread each post, add comments ass a new entry into the object, return result
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
