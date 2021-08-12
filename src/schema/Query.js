const Query = `type Query {
  user: User
  users: [User]
  allPostsFromUser: [Post]
  allPosts: [Post]
  allCommentsForPost: [Comment]
  getMessages: [Message]
  getReviews: [Review]
}`;

module.exports = Query;
