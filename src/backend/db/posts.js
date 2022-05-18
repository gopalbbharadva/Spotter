import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
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
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    postText: ` “As the author Tim Ferriss once wrote: “Develop the habit of letting 
    small bad things happen. If you don’t, you’ll never find time for the life-changing 
    big things.”`,
    postCaption: "kay likhu caption",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "M_D_123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
