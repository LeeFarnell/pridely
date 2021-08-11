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
    profilePicture: String
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

  input CreatePostInput {
    postedBy: String!
    title: String!
    subtitle: String!
    mainText: String!
    image: [String]
    badges: [String]
    url: String
  }

  input CreateCommentInput {
    commentPostedBy: String!
    commentText: String!
    postId: String!
  }

  input EditCommentInput {
    commentText: String!
  }

  input addRatingToUserInput {
    ratings: Int!
  }

  input createMessageInput {
    title: String!
    message: String!
  }

  type Mutation {
    login(input: LoginInput): Auth
    signup(input: SignupInput): Auth
    editUser(input: EditUserInput): Auth
    deleteUser: Auth
    createPost(input: CreatePostInput): Post
    editPost(input: EditPostInput): Post
    deletePost: Post
    createComment(input: CreateCommentInput): Comment
    editComment(input: EditCommentInput): Comment
    deleteComment: Comment
    addRatingToUser(input: addRatingToUserInput): Auth
    createMessage(input: createMessageInput): Message
  }
`;

module.exports = Mutation;
