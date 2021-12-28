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

const users = [];

const getDummyPosts = () => {
  return new Promise((resolve, reject) => {
    if (posts.length) {
      setTimeout(() => {
        resolve({ posts });
      }, 500);
    } else {
      reject({ message: "Not Authorized" });
    }
  });
};

const getPostById = (id) => {
  const post = posts.find((post) => post.id === +id);
  return new Promise((resolve, reject) => {
    if (post) {
      resolve({ post });
    } else {
      reject({ message: "Post not found" });
    }
  });
};

export { getDummyPosts, getPostById };
