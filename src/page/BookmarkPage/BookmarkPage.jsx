import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader, PostCard } from "../../components/componentExport";
import { getBookMarkPosts } from "../../features/bookmarkSlice";

export const BookmarkPage = () => {
  const {
    auth: { token, user },
    allUsers: { users },
    allPosts: { posts, isLoading: isLikeLoading },
    bookmarks: { bookmarkPosts, isLoading },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const currentUser = users?.find(({ username }) => username === user.username);
  const filteredBookMarkPosts = posts.filter((post) =>
    bookmarkPosts?.find((id) => id === post._id)
  );

  useEffect(() => {
    dispatch(getBookMarkPosts({ token }));
  }, []);

  return (
    <div className="flex justify-center">
      <div className="w-full flex justify-center items-center flex-col lg:w-2/3">
        {isLoading || isLikeLoading ? (
          <Loader />
        ) : filteredBookMarkPosts.length > 0 ? (
          filteredBookMarkPosts?.map((post) => (
            <PostCard post={post} key={post._id} currentUser={currentUser} />
          ))
        ) : (
          <div className="flex justify-center items-center h-40">
            <p className="text-2xl">No bookmarks </p>
          </div>
        )}
      </div>
    </div>
  );
};
