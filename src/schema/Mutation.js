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
    country: String!
    region: String!
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
    region: String
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

  input CreateReviewInput {
    commentBox: String!
    serviceUsed: String!
    rating: Int!
  }

  type Mutation {
    login(input: LoginInput): Auth
    signup(input: SignupInput): Auth
    editUser(input: EditUserInput): Auth
    deleteUser(userId: ID!): Auth
    createPost(input: CreatePostInput): Post
    editPost(input: EditPostInput): Post
    deletePost(postId: ID!): Post
    createComment(input: CreateCommentInput): Comment
    editComment(input: EditCommentInput): Comment
    deleteComment(commentId: ID!): Comment
    addRatingToUser(input: addRatingToUserInput): Auth
    createMessage(input: createMessageInput): Message
    deleteMessages: Message
    createReview(input: CreateReviewInput): User
  }
`;

module.exports = Mutation;
