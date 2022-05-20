import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    postText: ` “As the author Tim Ferriss once wrote: “Develop the habit of letting 
    small bad things happen. If you don’t, you’ll never find time for the life-changing 
    big things.”`,
    postCaption: "kay likhu caption",
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
          username: "adarshbalika",
          comments: [
            {
              _id: uuid(),
              content: "Nice, looks awesome",
              username: "adarshbalika",
              createdAt: formatDate(),
            },
            {
              _id: uuid(),
              content: "wow, what a beautiful picture",
              username: "adarshbalika",
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
    createdAt: "03:15 PM August 26,2016",
    updatedAt: formatDate(),
  },
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
    username: "adarshbalika",
    comments: [
      {
        _id: uuid(),
        content: "Nice, looks awesome",
        username: "adarshbalika",
        createdAt: formatDate(),
      },
      {
        _id: uuid(),
        content: "wow, what a beautiful picture",
        username: "adarshbalika",
        createdAt: formatDate(),
      },
    ],
    createdAt: "11:09 AM August 26,2016",
    updatedAt: formatDate(),
  },
];
