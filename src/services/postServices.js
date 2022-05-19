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

export const addCommentToPostService = (commentData, postId, token) =>
  axios.post(
    `/api/comments/add/${postId}`,
    {
      commentData,
    },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const editCommentToPostService = (
  commentData,
  postId,
  commentId,
  token
) =>
  axios.post(
    `/api/comments/edit/${postId}/${commentId}`,
    { commentData },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const deleteCommentOfPostService = (commentId, postId, token) =>
  axios.post(
    `/api/comments/delete/${postId}/${commentId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
