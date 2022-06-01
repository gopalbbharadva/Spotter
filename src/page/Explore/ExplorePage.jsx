import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader, PostCard } from "../../components/componentExport";
import { getAllPosts } from "../../features/postSlice";

export const ExplorePage = () => {
  const {
    auth: { user },
    allUsers: { users },
    allPosts: { posts, isLoading },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const currentUser = users?.find(({ username }) => username === user.username);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return (
    <div className="flex justify-center">
      <div className="w-full flex justify-center items-center flex-col lg:w-2/3">
        {isLoading ? (
          <Loader />
        ) : posts.length > 0 ? (
          posts?.map((post) => (
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
