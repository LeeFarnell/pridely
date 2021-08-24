const Review = `type Review {
  commentBox: String!,
  serviceUsed: String!
  rating: Int!,
  writtenBy: String!,
  writtenFor: String!,
  createdAt: String!,
  username: User
}`;

module.exports = Review;
