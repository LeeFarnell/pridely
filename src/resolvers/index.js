const user = require("./user");

const resolvers = {
  Query: {
    user,
  },
};

module.exports = resolvers;
