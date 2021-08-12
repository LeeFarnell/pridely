const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const { DB_URL, MONGOOSE_OPTIONS } = require("./config/config");
const resolvers = require("./resolvers");
const typeDefs = require("./schema");
const context = require("./context");

mongoose.connect(DB_URL, MONGOOSE_OPTIONS);
const db = mongoose.connection;

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
