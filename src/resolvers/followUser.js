const { Follower } = require("../models")

const followUser = async (_, {userId}, context) => {
    const followerId = userId
    const businessId = context.user.id
    const newFollower = Follower.create ({
        followerId, 
        businessId,
    })
    console.log(newFollower)
    return newFollower
}