const Query = `type Query {
  user: User
  users: [User]
  allPostsFromUser: [Post]
  allPosts: [Post]
  allCommentsForPost: [Comment]
}`;

module.exports = Query;
