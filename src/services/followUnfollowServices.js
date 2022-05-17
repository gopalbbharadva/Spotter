import axios from "axios";

export const followService = (userId, token) =>
  axios.post(
    `/api/users/follow/${userId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

export const unFollowService = (userId, token) =>
  axios.post(
    `/api/users/unfollow/${userId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
