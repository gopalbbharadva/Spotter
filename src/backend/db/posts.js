import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    postText: ` “One of the very worst uses of time is to do something very 
    well that need not to be done at all.”`,
    postCaption: "Read the book:eat that frog",
    postImage:
      "https://rokingz.com/wp-content/uploads/2021/08/1-4-819x1024.png",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          postText: `“Who you are, what you think, feel, and do, what you love—is the sum of 
    what you focus on.”`,
          postCaption: "dummy caption",
          postImage: "",
          likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
          },
          username: "M_D_123",
          comments: [
            {
              _id: uuid(),
              content: "Nice, looks awesome",
              username: "go_pal",
              createdAt: formatDate(),
            },
            {
              _id: uuid(),
              content: "wow, what a beautiful picture",
              username: "go_pal",
              createdAt: formatDate(),
            },
          ],
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },
      ],
      dislikedBy: [],
    },
    username: "M_D_123",
    comments: [],
    createdAt: "07:46 PM june 26,2019",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    postText: ` “As the author Tim Ferriss once wrote: “Develop the habit of letting 
    small bad things happen. If you don’t, you’ll never find time for the life-changing 
    big things.”`,
    postCaption: "Habits are the proof that you are growing.",
    postImage: "https://miro.medium.com/max/1400/1*tQszPBlBdi522xW1DnhwgQ.jpeg",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          postText: `“Who you are, what you think, feel, and do, what you love—is the sum of 
    what you focus on.”`,
          postCaption: "dummy caption",
          postImage: "",
          likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
          },
          username: "Nikhil_23_nb",
          comments: [
            {
              _id: uuid(),
              content: "Nice, looks awesome",
              username: "go_pal",
              createdAt: formatDate(),
            },
            {
              _id: uuid(),
              content: "wow, what a beautiful picture",
              username: "go_pal",
              createdAt: formatDate(),
            },
          ],
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },
      ],
      dislikedBy: [],
    },
    username: "go_pal",
    comments: [],
    createdAt: "10:01 AM December 12,2014",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    postText: `“Don’t wait for others to come & tell you how worthy you’re. Instead, get a piece of paper and write down all the things that make you feel important & worthy.”`,
    postCaption: "dummy caption",
    postImage: "",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "go_pal",
    comments: [
      {
        _id: uuid(),
        content: "Nice, looks awesome",
        username: "go_pal",
        createdAt: formatDate(),
      },
      {
        _id: uuid(),
        content: "wow, what a beautiful picture",
        username: "go_pal",
        createdAt: formatDate(),
      },
    ],
    createdAt: "11:09 AM August 26,2016",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    postText: ` “Workers work hard enough to not be fired, and owners pay just enough
     so that workers won't quit.”`,
    postCaption: "Money making is a skill",
    postImage:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1524451661l/39924789._SY475_.jpg",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          postText: `“Who you are, what you think, feel, and do, what you love—is the sum of 
    what you focus on.”`,
          postCaption: "dummy caption",
          postImage: "",
          likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
          },
          username: "Himadri_892",
          comments: [
            {
              _id: uuid(),
              content: "Nice, looks awesome",
              username: "go_pal",
              createdAt: formatDate(),
            },
            {
              _id: uuid(),
              content: "wow, what a beautiful picture",
              username: "go_pal",
              createdAt: formatDate(),
            },
          ],
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },
      ],
      dislikedBy: [],
    },
    username: "go_pal",
    comments: [],
    createdAt: "05:15 PM April 11,2016",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    postText: `“Who you are, what you think, feel, and do, what you love—is the sum of 
    what you focus on.”`,
    postCaption: "Read level up to level up",
    postImage: "",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "go_pal",
    comments: [
      {
        _id: uuid(),
        content: "wow, what a beautiful thought",
        username: "Himadri_892",
        createdAt: formatDate(),
      },
    ],
    createdAt: "06:30 AM September 22,2015",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    postText: `The biggest enemies we have to overcome on the road to success are not lack of ability and lack of opportunity but fears of failure and rejection and the doubts that they trigger.`,
    postCaption: "Do the thing which your mind says not to do.",
    postImage: "",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Himadri_892",
    comments: [
      {
        _id: uuid(),
        content: "wow, what a beautiful thought",
        username: "Nikhil_23_nb",
        createdAt: formatDate(),
      },
    ],
    createdAt: "02:00 PM March 17,2018",
    updatedAt: formatDate(),
  },
];
