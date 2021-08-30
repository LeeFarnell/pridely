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

// performing connection to the db
mongoose.connect(DB_URL, MONGOOSE_OPTIONS);
const db = mongoose.connection;

(async function () {
  // create http server
  const app = express();

  const httpServer = createServer(app);

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const server = new ApolloServer({
    schema,
    context,
  });

  // start apollo server
  await server.start();

  // use express as middleware
  server.applyMiddleware({ app });

  // create a subscription server for messaging, currently unused
  SubscriptionServer.create(
    { schema, execute, subscribe },
    { server: httpServer, path: server.graphqlPath }
  );

  const PORT = process.env.PORT || 4000;

  // run the server
  db.once("open", () => {
    httpServer.listen(PORT, () =>
      console.log(`🚀  Server ready at  http://localhost:${PORT}/graphql`)
    );
  });
})();
