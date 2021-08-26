const Comment = `type Comment {
  _id: ID!
  commentPostedBy: User
  postId: String!
  commentText: String!
  createdAt: String
}`;

module.exports = Comment;
