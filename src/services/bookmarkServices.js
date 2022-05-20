import axios from "axios";

export const getBookrmakrService = (token) =>
  axios.get("/api/users/bookmark", {
    headers: {
      authorization: token,
    },
  });

export const bookmarkService = (postId, token) =>
  axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

export const removeFromBookmarkService = (postId, token) =>
  axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
