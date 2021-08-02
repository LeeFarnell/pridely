const user = require("./user");
const login = require("./login");
const signup = require("./signup");
const users = require("./users");
const editUser = require("./editUser");
const deleteUser = require("./deleteUser");
const allPostsFromUser = require("./allPostsFromUser");
const allPosts = require("./allPosts");
const editPost = require("./editPost");
const createPost = require("./createPost");
const allCommentsForPost = require("./allCommentsForPost");
const deletePost = require("./deletePost");
const createComment = require("./createComment");
const editComment = require("./editComment");
const deleteComment = require("./deleteComment");

const resolvers = {
  Query: {
    user,
    users,
    allPostsFromUser,
    allPosts,
    allCommentsForPost,
  },
  Mutation: {
    login,
    signup,
    editUser,
    deleteUser,
    editPost,
    createPost,
    deletePost,
    createComment,
    editComment,
    deleteComment,
  },
};

module.exports = resolvers;
