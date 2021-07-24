// importing mongoose
const mongoose = require("mongoose");

const { DB_URL, MONGOOSE_OPTIONS } = require("../../config/config");

// importing models and seed data
const {
  StandardUser,
  BusinessUser,
  Follower,
  Post,
  Review,
  PostComment,
  Message,
} = require("../../models");

const businessUsersData = require("./data/businessUsers");
const followersData = require("./data/followers");
const messagesData = require("./data/messages");
const postCommentsData = require("./data/postComments");
const postsData = require("./data/posts");
const reviewsData = require("./data/reviews");
const standardUsersData = require("./data/standardUser");

mongoose.connect(DB_URL, MONGOOSE_OPTIONS);

const init = async () => {
  try {
    await BusinessUser.deleteMany({});
    await StandardUser.deleteMany({});
    await Post.deleteMany({});
    await PostComment.deleteMany({});
    await Follower.deleteMany({});
    await Review.deleteMany({});
    await Message.deleteMany({});

    console.info("Data successfully deleted");

    await BusinessUser.insertMany(businessUsersData);
    await StandardUser.insertMany(standardUsersData);

    console.info("Users successfully Seeded");

    const businessUsersFromDb = await BusinessUser.find({});
    const standardUsersFromDb = await StandardUser.find({});

    const postsToSeed = postsData.map((post, index) => {
      return {
        ...post,
        postedBy: businessUsersFromDb[index]._id,
      };
    });

    await Post.insertMany(postsToSeed);

    console.info("Posts successfully Seeded");

    const postsFromDb = await Post.find({});

    const commentsToSeed = postCommentsData.map((comment, index) => {
      return {
        ...comment,
        commentPostedBy: businessUsersFromDb[index]._id,
        postId: postsFromDb[index]._id,
      };
    });

    await PostComment.insertMany(commentsToSeed);

    console.info("Comments successfully seeded");

    const followersToSeed = followersData.map((follower, index) => {
      return {
        ...follower,
        followerId: standardUsersFromDb[index]._id,
        businessId: businessUsersFromDb[index]._id,
      };
    });

    await Follower.insertMany(followersToSeed);

    console.info("Followers successfully seeded");

    const reviewsToSeed = reviewsData.map((review, index) => {
      return {
        ...review,
        writtenBy: standardUsersFromDb[index]._id,
        writtenFor: businessUsersFromDb[index]._id,
      };
    });

    await Review.insertMany(reviewsToSeed);

    console.info("Reviews successfully seeded");

    const messagesToSeed = messagesData.map((message, index) => {
      return {
        ...message,
        writtenBy: standardUsersFromDb[index]._id,
        writtenFor: businessUsersFromDb[index]._id,
      };
    });

    await Message.insertMany(messagesToSeed);

    console.info("Messages successfully seeded");

    process.exit(0);
  } catch (error) {
    console.info(error.message);
  }
};

init();
