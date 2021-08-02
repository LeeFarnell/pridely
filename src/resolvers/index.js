const user = require("./user");
const login = require("./login");
const signup = require("./signup");
const users = require("./users");
const editUser = require("./editUser");
const deleteUser = require("./deleteUser");
const post = require("./post");
const posts = require("./posts");
const editPost = require("./editPost");

const resolvers = {
  Query: {
    user,
    users,
    post,
    posts,
  },
  Mutation: {
    login,
    signup,
    editUser,
    deleteUser,
    editPost,
  },
};

module.exports = resolvers;
