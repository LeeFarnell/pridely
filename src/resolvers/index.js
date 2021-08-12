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
const addRatingToUser = require("./addRatingToUser");
const getMessages = require("./getMessages");
const createMessage = require("./createMessage");
const deleteMessages = require("./deleteMessages");

const resolvers = {
  Query: {
    user,
    users,
    allPostsFromUser,
    allPosts,
    allCommentsForPost,
    getMessages,
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
    addRatingToUser,
    createMessage,
    deleteMessages,
  },
};

module.exports = resolvers;
