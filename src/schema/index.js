const Auth = require("./Auth");
const Mutation = require("./Mutation");
const Query = require("./Query");
const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

const typeDefs = [Query, User, Post, Comment, Auth, Mutation];

module.exports = typeDefs;
