const Auth = require("./Auth");
const Mutation = require("./Mutation");
const Query = require("./Query");
const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");
const Message = require("./Message");
const Review = require("./Review");
const Follower = require("./Follower");
const Dashboard = require("./Dashboard");
const Profile = require("./Profile");

const typeDefs = [
  Query,
  User,
  Post,
  Comment,
  Auth,
  Message,
  Review,
  Follower,
  Mutation,
  Dashboard,
  Profile,
];

module.exports = typeDefs;
