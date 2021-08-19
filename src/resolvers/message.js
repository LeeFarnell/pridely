const { PubSub, withFilter } = require("graphql-subscriptions");
const {
  Types: { ObjectId },
} = require("mongoose");

const { Message } = require("../models");

const pubsub = new PubSub();

const createMessage = async (_, { fromUser, toUser, message }) => {
  let post = await Message.create({
    fromUser,
    toUser,
    message,
  });

  post = await post.populate("fromUser").populate("toUser").execPopulate();

  pubsub.publish("POST_CREATED", { messageCreated: post });

  return post;
};

const messageCreated = withFilter(
  () => pubsub.asyncIterator("POST_CREATED"),
  (payload, variables) => {
    // return (
    //   ObjectId(payload.messageCreated.fromUser._id).toString() ===
    //     variables.fromUser ||
    //   ObjectId(payload.messageCreated.toUser._id).toString() === variables.toUser
    // );
    return true;
  }
);

module.exports = { createMessage, messageCreated };
