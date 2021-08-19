const Query = require("./Query");
const Mutation = require("./Mutation");
const Subscription = require("./Subscription");
const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");
const Auth = require("./Auth");
const Message = require("./Message");
const Review = require("./Review");
const Follower = require("./Follower");
const Dashboard = require("./Dashboard");
const Profile = require("./Profile");

const typeDefs = [
  Query,
  Mutation,
  Subscription,
  User,
  Post,
  Comment,
  Auth,
  Message,
  Review,
  Follower,
  Dashboard,
  Profile,
];

module.exports = typeDefs;
