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

  input editBusinessUserInput {
    businessName: String!
    businessType: String!
    businessDescription: String!
    socialMedia: [String!]
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
    userId: String
  }

  input createMessageInput {
    title: String!
    message: String!
  }

  input CreateReviewInput {
    commentBox: String!
    serviceUsed: String!
    writtenFor: String!
    rating: Int!
  }

  type Mutation {
    login(input: LoginInput): Auth
    signup(input: SignupInput): Auth
    editUser(input: EditUserInput): Auth
    editBusinessUser(input: editBusinessUserInput): Auth
    deleteUser(userId: ID!): Auth
    createNewPost(input: CreatePostInput): Post
    editPost(input: EditPostInput): Post
    deletePost(postId: ID!): Post
    createComment(input: CreateCommentInput): Comment
    editComment(input: EditCommentInput): Comment
    deleteComment(commentId: ID!): Comment
    addRatingToUser(input: addRatingToUserInput): Auth
    createReview(input: CreateReviewInput): Review
    createMessage(fromUser: ID!, toUser: ID!, message: String!): Message
    likeAPost(postId: ID!): Post
  }
`;

module.exports = Mutation;
