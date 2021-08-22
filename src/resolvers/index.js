const { Follower, Post, PostComment, User } = require("../models");

const user = require("./user");
const login = require("./login");
const signup = require("./signup");
const users = require("./users");
const editUser = require("./editUser");
const deleteUser = require("./deleteUser");
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
    editPost,
    createNewPost,
    deletePost,
    createComment,
    editComment,
    deleteComment,
    addRatingToUser,
    createMessage,
    createReview,
  },

  Dashboard: {
    followers: async (parent) => {
      const followerId = parent.currentUser.id;

      const followersFromDb = await Follower.find({ followerId }).populate(
        "businessId"
      );

      const followers = followersFromDb.map((follower) => {
        return follower.businessId;
      });

      return followers;
    },
  },

  User: {
    posts: async (parent) => {
      const postedBy = parent._id;

      const posts = await Post.find({ postedBy });

      return posts;
    },
  },

  Profile: {
    comments: async (parent) => {
      const commentForPost = parent.user._id;

      const comments = await PostComment.find({
        commentPostedBy: commentForPost,
      });

      return comments;
    },
    // commentBy: async (parent) => {
    //   const comments = await PostComment.find({
    //     commentPostedBy: commentForPost,
    //   });    },
  },
};

module.exports = resolvers;
