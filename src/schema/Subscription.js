const { gql } = require("apollo-server");

const Subscription = gql`
  type Subscription {
    postCreated(fromUser: ID!, toUser: ID!): Message
  }
`;

module.exports = Subscription;
