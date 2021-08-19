const Post = `type Post {
  _id: ID!
  postedBy: String
  title: String
  subtitle: String
  mainText: String
  image: [String]
  badges: String
  url: String
  likes: Int
  createdAt: String
}`;

module.exports = Post;
