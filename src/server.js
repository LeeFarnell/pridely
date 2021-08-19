const express = require("express");
const { createServer } = require("http");
const { execute, subscribe } = require("graphql");
const { SubscriptionServer } = require("subscriptions-transport-ws");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");

const { DB_URL, MONGOOSE_OPTIONS } = require("./config/config");
const resolvers = require("./resolvers");
const typeDefs = require("./schema");
const context = require("./context");

mongoose.connect(DB_URL, MONGOOSE_OPTIONS);
const db = mongoose.connection;

(async function () {
  const app = express();

  const httpServer = createServer(app);

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const server = new ApolloServer({
    schema,
  });

  await server.start();

  server.applyMiddleware({ app });

  SubscriptionServer.create(
    { schema, execute, subscribe },
    { server: httpServer, path: server.graphqlPath }
  );

  const PORT = process.env.PORT || 4000;

  db.once("open", () => {
    httpServer.listen(PORT, () =>
      console.log(`🚀  Server ready at  http://localhost:${PORT}/`)
    );
  });
})();

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context,
// });

// // this function will run the server
// db.once("open", () => {
//   server.listen().then(({ url }) => {
//     console.log(`🚀  Server ready at ${url}`);
//   });
// });
