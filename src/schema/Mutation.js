const { gql } = require("apollo-server");

const Mutation = gql`
  input LoginInput {
    email: String!
    password: String!
  }

  input SignupInput {
    name: String!
    username: String!
    type: String!
    email: String!
    password: String!
    country: String
    city: String
    businessName: String
    businessType: String
    socialMedia: String
    age: Int
    gender: String
    identifyAs: String
    pronouns: String
  }

  type Mutation {
    login(input: LoginInput): Auth
    signup(input: SignupInput): Auth
  }
`;

module.exports = Mutation;
