const { Post, PostComment, User } = require("../models");

const user = require("./user");
const login = require("./login");
const signup = require("./signup");
const users = require("./users");
const editUser = require("./editUser");
const deleteUser = require("./deleteUser");
const followUser = require("./followUser");
const allPosts = require("./allPosts");
const editPost = require("./editPost");
const createNewPost = require("./createNewPost");
const allCommentsForPost = require("./allCommentsForPost");
const deletePost = require("./deletePost");
const createComment = require("./createComment");
const editComment = require("./editComment");
const deleteComment = require("./deleteComment");
const addRatingToUser = require("./addRatingToUser");
const createReview = require("./createReview");
const getReviews = require("./allReviews");
const editBusinessUser = require("./editBusinessUser");
const allFollowers = require("./allFollowers");
const followerData = require("./followerData");
const dashboard = require("./dashboard");
const profile = require("./profile");
const chat = require("./chat");
const { createMessage } = require("./message");
const businessSearch = require("./businessSearch");
const likeAPost = require("./likeAPost");

const resolvers = {
  Query: {
    user,
    users,
    allPosts,
    allCommentsForPost,
    getReviews,
    allFollowers,
    followerData,
    dashboard,
    profile,
    chat,
    businessSearch,
  },
  Mutation: {
    login,
    signup,
    editUser,
    editBusinessUser,
    deleteUser,
    followUser,
    editPost,
    createNewPost,
    deletePost,
    createComment,
    editComment,
    deleteComment,
    addRatingToUser,
    createMessage,
    createReview,
    likeAPost,
  },

  // User type, finds all posts for user, targets the user from the parent.
  User: {
    posts: async (parent) => {
      const postedBy = parent._id;

      const posts = await Post.find({ postedBy }).populate("likes");

      return posts;
    },
  },

  // Profile type resolver
  Profile: {
    comments: async (parent) => {
      const postCreatedBy = parent.user._id;

      // returns a list of posts for the user returned by the parent resolver and populates required data
      const posts = await Post.find({ postedBy: postCreatedBy })
        .populate("likes")
        .populate("postedBy")
        .lean();

      // maps through the above result and returns a list of post id's
      const postsIds = posts.map((post) => {
        return post._id;
      });

      // returns a list of comments for each post that has an id in the postIds array
      const commentsForPosts = await PostComment.find({
        postId: { $in: postsIds },
      }).populate("commentPostedBy");

      return commentsForPosts;
    },
  },

  // Review type
  Review: {
    // gets a list of reviews that are written by the user returned by the parent resolver
    username: async (parent) => {
      return await User.findById(parent.writtenBy);
    },
  },
};

module.exports = resolvers;
