// importing dependencies
const mongoose = require("mongoose");
const axios = require("axios");

//importing mongoose configuration
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

// connect to mongoose database
mongoose.connect(DB_URL, MONGOOSE_OPTIONS);

const init = async () => {
  try {
    // making a call to an api to get a list of all internationally recognized countries
    const countriesConfig = {
      method: "GET",
      url: "https://countriesnow.space/api/v0.1/countries/flag/unicode",
    };

    // deleting pre-existent data in the db
    await User.deleteMany({});
    await Post.deleteMany({});
    await PostComment.deleteMany({});
    await Follower.deleteMany({});
    await Review.deleteMany({});
    await Message.deleteMany({});
    console.info("Data successfully deleted");

    // inserting users into database
    const promises = usersData.map((user) => User.create(user));
    await Promise.all(promises);
    console.info("Users successfully Seeded");

    // retrieving users from database
    const usersFromDb = await User.find({});

    // seeding posts. assigning them to random user from database
    const postsToSeed = postsData.map((post) => {
      return {
        ...post,
        postedBy:
          usersFromDb[Math.floor(Math.random() * usersFromDb.length)]._id,
      };
    });

    await Post.insertMany(postsToSeed);
    console.info("Posts successfully Seeded");

    // retrieving posts from database
    const postsFromDb = await Post.find({});

    // seeding comments assigning them to random posts from database
    const commentsToSeed = postCommentsData.map((comment) => {
      return {
        ...comment,
        commentPostedBy:
          usersFromDb[Math.floor(Math.random() * usersFromDb.length)]._id,
        postId: postsFromDb[Math.floor(Math.random() * postsFromDb.length)]._id,
      };
    });

    await PostComment.insertMany(commentsToSeed);
    console.info("Comments successfully seeded");

    // seeding followers, assigning random followers to random users
    const followersToSeed = followersData.map((follower) => {
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

    // seeding reviews, assigning random reviews to random users
    const reviewsToSeed = reviewsData.map((review) => {
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

    const usersMap = [
      {
        from: "pparker",
        to: "ssmith",
      },
      {
        from: "pparker",
        to: "ssmith",
      },
      {
        from: "pparker",
        to: "dderek",
      },
      {
        from: "dderek",
        to: "ssmith",
      },
      {
        from: "alice.green",
        to: "dderek",
      },
    ];

    // seeding messages assigning them randomly
    const messagesToSeed = messagesData.map((message, index) => {
      const { _id: fromUser } = usersFromDb.find(
        (user) => user.username === usersMap[index].from
      );

      const { _id: toUser } = usersFromDb.find(
        (user) => user.username === usersMap[index].to
      );
      return {
        fromUser,
        toUser,
        ...message,
      };
    });

    await Message.insertMany(messagesToSeed);
    console.info("Messages successfully seeded");

    // terminating connection to db
    process.exit(0);
  } catch (error) {
    console.info(error.message);

    // terminating connection to db
    process.exit(0);
  }
};

init();
