const Profile = `type Profile {
  user: User!
  myFollowers: [User]
  comments: [Comment]
}`;

// commentBy: User
module.exports = Profile;
