const { gql } = require("apollo-server");

const Query = gql`
  type Query {
    user: User
    users: [User]
    allPosts(userId: String!): [Post]
    allCommentsForPost: [Comment]
    getMessages: [Message]
    getReviews: [Review]
    allFollowers: [Follower]
    followerData(followerId: String!): User
    dashboard: Dashboard
    profile(userId: String): Profile
  }
`;

module.exports = Query;
