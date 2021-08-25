const users = [
  {
    name: "Peter Parker",
    username: "pparker",
    type: "Business",
    email: "peterparker@email.com",
    password: "p123",
    country: "United Kingdom",
    region: "Birmingham",
    profilePicture: "http://www.url.com",
    businessName: "Peter Business",
    businessType: "Art",
    businessDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    businessId: "abc123",
    socialMedia: "facebook",
    ratings: [0, 2, 5, 3, 3, 3],
    age: 24,
    gender: "Male",
    identifyAs: "Queer",
    pronouns: "He/Him",
    createdAt: Date.now(),
  },
  {
    name: "Sam Smith",
    username: "ssmith",
    type: "Business",
    email: "ssmith@email.com",
    password: "p123",
    country: "United Kingdom",
    region: "Birmingham",
    profilePicture: "http://www.url.com",
    businessName: "Sam Business",
    businessType: "Art",
    businessDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    businessId: "abcd123",
    socialMedia: "linkedIn",
    ratings: [0, 3, 5, 5, 5, 5, 4],
    age: 37,
    gender: "Female",
    identifyAs: "Trans",
    pronouns: "Xe/Xim",
    createdAt: Date.now(),
  },
  {
    name: "Dave Derek",
    username: "dderek",
    type: "Standard",
    email: "dderek@email.com",
    password: "p123",
    country: "United Kingdom",
    region: "Birmingham",
    profilePicture: "http://www.url.com",
    socialMedia: "instagram",
    age: 39,
    gender: "Non-Binary",
    identifyAs: "Bisexual",
    pronouns: "They/Them",
    createdAt: Date.now(),
  },
];

module.exports = users;
