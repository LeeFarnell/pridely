const user = require("./user");
const login = require("./login");
const signup = require("./signup");

const resolvers = {
  Query: {
    user,
  },
  Mutation: {
    login,
    signup,
  },
};

module.exports = resolvers;
