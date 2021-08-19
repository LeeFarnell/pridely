const { gql } = require("apollo-server");

const Subscription = gql`
  type Subscription {
    messageCreated(fromUser: ID!, toUser: ID!): Message
  }
`;

module.exports = Subscription;
