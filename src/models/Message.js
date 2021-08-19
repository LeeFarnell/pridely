// importing dependencies
const mongoose = require("mongoose");

// creating a new Schema
const Schema = mongoose.Schema;

const messageSchema = {
  message: {
    type: String,
    required: true,
  },
  fromUser: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  toUser: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
};

const MessageSchema = new Schema(messageSchema);

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;
