const { Follower, Post } = require("../models");

const user = require("./user");
const login = require("./login");
const signup = require("./signup");
const users = require("./users");
const editUser = require("./editUser");
const deleteUser = require("./deleteUser");
const allPosts = require("./allPosts");
const editPost = require("./editPost");
const createPost = require("./createPost");
const allCommentsForPost = require("./allCommentsForPost");
const deletePost = require("./deletePost");
const createComment = require("./createComment");
const editComment = require("./editComment");
const deleteComment = require("./deleteComment");
const addRatingToUser = require("./addRatingToUser");
const getMessages = require("./getMessages");
const createMessage = require("./createMessage");
const deleteMessages = require("./deleteMessages");
const createReview = require("./createReview");
const getReviews = require("./allReviews");
const editBusinessUser = require("./editBusinessUser");
const allFollowers = require("./allFollowers");
const followerData = require("./followerData");
const dashboard = require("./dashboard");

const resolvers = {
  Query: {
    user,
    users,
    allPosts,
    allCommentsForPost,
    getMessages,
    getReviews,
    allFollowers,
    followerData,
    dashboard,
  },
  Mutation: {
    login,
    signup,
    editUser,
    editBusinessUser,
    deleteUser,
    editPost,
    createPost,
    deletePost,
    createComment,
    editComment,
    deleteComment,
    addRatingToUser,
    createMessage,
    deleteMessages,
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
};

module.exports = resolvers;
