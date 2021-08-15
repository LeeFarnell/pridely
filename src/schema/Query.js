const Query = `type Query {
  user: User
  users: [User]
  allPostsFromUser: [Post]
  allPosts: [Post]
  allCommentsForPost: [Comment]
  getMessages: [Message]
  getReviews: [Review]
  allFollowers: [Follower]
}`;

module.exports = Query;
