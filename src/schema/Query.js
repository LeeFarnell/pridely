const { gql } = require("apollo-server");

const Query = gql`
  type Query {
    user: User
    users: [User]
    allPostsFromUser: [Post]
    allPosts: [Post]
    allCommentsForPost: [Comment]
    getMessages: [Message]
    getReviews: [Review]
    allFollowers: [Follower]
    followerData(followerId: String): User
  }
`;

module.exports = Query;
