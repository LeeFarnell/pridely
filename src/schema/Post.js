const Post = `type Post {
  _id: ID!
  postedBy: String
  title: String
  subtitle: String
  mainText: String
  image: [String]
  badges: String
  likes: [User]
  url: String
  createdAt: String
  comments: [Comment]
}`;

module.exports = Post;
