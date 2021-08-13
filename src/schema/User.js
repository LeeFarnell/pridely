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
  socialMedia: String
  ratings: [Int]
  createdAt: String
  age: Int
  gender: String
  identifyAs: String
  pronouns: String
}`;

module.exports = User;
