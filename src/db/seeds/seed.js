// importing mongoose
const mongoose = require("mongoose");

const { DB_URL, MONGOOSE_OPTIONS } = require("../../config/config");

// importing models and seed data
const {
  User,
  Follower,
  Post,
  Review,
  PostComment,
  Message,
} = require("../../models");

const followersData = require("./data/followers");
const messagesData = require("./data/messages");
const postCommentsData = require("./data/postComments");
const postsData = require("./data/posts");
const reviewsData = require("./data/reviews");
const usersData = require("./data/users");

mongoose.connect(DB_URL, MONGOOSE_OPTIONS);

const init = async () => {
  try {
    await User.deleteMany({});
    await Post.deleteMany({});
    await PostComment.deleteMany({});
    await Follower.deleteMany({});
    await Review.deleteMany({});
    await Message.deleteMany({});

    console.info("Data successfully deleted");

    await User.insertMany(usersData);

    console.info("Users successfully Seeded");

    const usersFromDb = await User.find({});

    const postsToSeed = postsData.map((post, index) => {
      return {
        ...post,
        postedBy:
          usersFromDb[Math.floor(Math.random() * usersFromDb.length)]._id,
      };
    });

    await Post.insertMany(postsToSeed);

    console.info("Posts successfully Seeded");

    const postsFromDb = await Post.find({});

    const commentsToSeed = postCommentsData.map((comment, index) => {
      return {
        ...comment,
        commentPostedBy:
          usersFromDb[Math.floor(Math.random() * usersFromDb.length)]._id,
        postId: postsFromDb[Math.floor(Math.random() * postsFromDb.length)]._id,
      };
    });

    await PostComment.insertMany(commentsToSeed);

    console.info("Comments successfully seeded");

    const followersToSeed = followersData.map((follower, index) => {
      return {
        ...follower,
        followerId:
          usersFromDb[Math.floor(Math.random() * usersFromDb.length)]._id,
        businessId:
          usersFromDb[Math.floor(Math.random() * usersFromDb.length)]._id,
      };
    });

    await Follower.insertMany(followersToSeed);

    console.info("Followers successfully seeded");

    const reviewsToSeed = reviewsData.map((review, index) => {
      return {
        ...review,
        writtenBy:
          usersFromDb[Math.floor(Math.random() * usersFromDb.length)]._id,
        writtenFor:
          usersFromDb[Math.floor(Math.random() * usersFromDb.length)]._id,
      };
    });

    await Review.insertMany(reviewsToSeed);

    console.info("Reviews successfully seeded");

    const messagesToSeed = messagesData.map((message, index) => {
      return {
        ...message,
        fromUser:
          usersFromDb[Math.floor(Math.random() * usersFromDb.length)]._id,
        toUser: usersFromDb[Math.floor(Math.random() * usersFromDb.length)]._id,
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
