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

  input EditUserInput {
    name: String!
    username: String!
    type: String!
    country: String
    city: String
    businessName: String
    businessDescription: String
    businessType: String
    socialMedia: String
    age: Int
    gender: String
    identifyAs: String
    pronouns: String
  }

  input EditPostInput {
    title: String!
    subtitle: String!
    mainText: String!
    image: [String]
    badges: [String]
    url: String
  }

  type Mutation {
    login(input: LoginInput): Auth
    signup(input: SignupInput): Auth
    editUser(input: EditUserInput): Auth
    deleteUser: Auth
    editPost(input: EditPostInput): Post
  }
`;

module.exports = Mutation;
