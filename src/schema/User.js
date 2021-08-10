const User = `type User {
  id: ID!
  name: String!
  username: String!
  type: String!
  email: String!
  profilePicture: String!
  password: String
  city: [String]
  country: [String]
  businessName: String
  businessType: [String]
  businessDescription: String
  socialMedia: String
  rating: Int
  ratings: Int
  createdAt: String
  age: Int
  gender: String
  identifyAs: String
  pronouns: String
}`;

module.exports = User;
