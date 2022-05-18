import axios from "axios";

export const getAllPostsService = () => axios.get("/api/posts");

export const postService = (postData, token) =>
  axios.post(
    "/api/posts",
    { postData },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const updatePostService = (postId, postData, token) =>
  axios.post(
    `/api/posts/edit/${postId}`,
    { postData },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const deletePostService = (postId, token) =>
  axios.delete(`/api/posts/${postId}`, {
    headers: { authorization: token },
  });
