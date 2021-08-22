const { gql } = require("apollo-server");

const Query = gql`
  type Query {
    user: User
    users: [User]
    allPosts(userId: String!): [Post]
    allCommentsForPost: [Comment]
    getReviews(userId: String!): [Review]
    allFollowers: [Follower]
    followerData(followerId: String!): User
    dashboard: Dashboard
    profile(userId: String): Profile
    chat(fromUserId: ID!, toUserId: ID): [Message]
    businessSearch(
      businessType: String!
      country: String
      region: String
    ): [User]
  }
`;

module.exports = Query;
