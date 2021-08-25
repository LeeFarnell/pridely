const Dashboard = `type Dashboard {
  currentUser: User!
  followers: [User]
  posts: [Post]
}`;

module.exports = Dashboard;
