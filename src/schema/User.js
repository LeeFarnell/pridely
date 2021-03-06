const User = `type User {
  id: ID!
  name: String!
  username: String!
  type: String!
  email: String!
  profilePicture: String!
  region: String
  country: String
  businessName: String
  businessType: String
  businessDescription: String
  calendlyUsername: String
  ratings: [Int]
  socialMedia: [String]
  createdAt: String
  age: Int
  gender: String
  identifyAs: String
  pronouns: String
  posts: [Post]
  averageRating: Float
}`;

module.exports = User;
