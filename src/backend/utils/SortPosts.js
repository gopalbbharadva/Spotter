export const sortPosts = (sortStatus, finalUserPosts) => {
  const postTempArray = finalUserPosts.slice();
  if (sortStatus === "Trending")
    postTempArray.sort((a, b) => b.likes.likeCount - a.likes.likeCount);

  if (sortStatus === "Latest")
    postTempArray.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  if (sortStatus === "Oldest")
    postTempArray.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

  return postTempArray;
};
