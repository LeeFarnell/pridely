const { ApolloServer } = require("apollo-server");

const db = require("./config/config");

const resolvers = require("./resolvers");
const typeDefs = require("./schema");
const context = require("./context");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

// this function will run the server
db.once("open", () => {
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
});
