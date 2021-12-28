const posts = [
  {
    id: 1,
    title: "Dalai Lama",
    description: "The purpose of our lives is to be happy.",
  },
  {
    id: 2,
    title: "John Lennon",
    description: "Life is what happens when you’re busy making other plans.",
  },
  {
    id: 3,
    title: "Stephen King",
    description: "Get busy living or get busy dying.",
  },
  {
    id: 4,
    title: "Mae West",
    description: "You only live once, but if you do it right, once is enough.",
  },
  {
    id: 5,
    title: "Thomas A. Edison",
    description:
      "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
  },
  {
    id: 6,
    title: "Albert Einstein",
    description:
      "If you want to live a happy life, tie it to a goal, not to people or things.",
  },
  {
    id: 7,
    title: "Babe Ruth",
    description:
      "Never let the fear of striking out keep you from playing the game.",
  },
  {
    id: 8,
    title: "Will Smith",
    description:
      "Money and success don’t change people; they merely amplify what is already there.",
  },
];

const users = [
  {
    id: 1,
    name: "Sandeep",
    email: "sandeep@example.com",
    password: "123456",
    token: "Sandeep-123",
  },
  {
    id: 2,
    name: "Liquid",
    email: "liquid@example.com",
    password: "123456",
    token: "Liquid-123",
  },
];

const verifyAccessToken = (token) => {
  if (token && token.split("-")[1] === "123") {
    return true;
  } else {
    return false;
  }
};

const getAccessToken = (body) => {
  const { email, password } = body;
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  return new Promise((resolve, reject) => {
    if (user && verifyAccessToken(user.token)) {
      resolve({
        id: user.id,
        name: user.name,
        email: user.email,
        token: user.token,
      });
    } else {
      reject({ message: "Invalid email or password" });
    }
  });
};

const getUserDetails = (id, token) => {
  const user = users.find((user) => user.id === +id);

  return new Promise((resolve, reject) => {
    if (user && verifyAccessToken(token)) {
      resolve({
        name: user.name,
        email: user.email,
      });
    } else {
      reject({ message: "Not Authorized" });
    }
  });
};

const getDummyPosts = (token) => {
  return new Promise((resolve, reject) => {
    if (posts.length && verifyAccessToken(token)) {
      setTimeout(() => {
        resolve({ posts });
      }, 500);
    } else {
      reject({ message: "Not Authorized" });
    }
  });
};

const getPostById = (id, token) => {
  const post = posts.find((post) => post.id === +id);
  return new Promise((resolve, reject) => {
    if (post && verifyAccessToken(token)) {
      resolve({ post });
    } else {
      reject({ message: "Not authorized" });
    }
  });
};

export { getDummyPosts, getPostById, getAccessToken, getUserDetails };
