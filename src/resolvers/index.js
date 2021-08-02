const user = require("./user");
const login = require("./login");
const signup = require("./signup");
const users = require("./users");
const editUser = require("./editUser");
const deleteUser = require("./deleteUser");

const resolvers = {
  Query: {
    user,
    users,
  },
  Mutation: {
    login,
    signup,
    editUser,
    deleteUser,
  },
};

module.exports = resolvers;
