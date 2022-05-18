import React, { useEffect } from "react";
import { Loader, PostCard, Sidebar } from "../../components/componentExport";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../features/usersSlice";
import { getAllPosts } from "../../features/postSlice";

export const PostsPage = () => {
  const dispatch = useDispatch();

  const {
    auth: { user },
    allUsers: { users },
    allPosts: { posts, isLoading },
  } = useSelector((state) => state);

  const currentUser = users?.find(({ username }) => username === user.username);

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllPosts());
  }, []);

  return (
    <div className="px-2 flex flex-col min-h-screen">
      <div className="flex justify-center">
        <div className="flex justify-center items-end flex-col lg:w-2/3">
          {isLoading ? (
            <Loader />
          ) : (
            posts.map((post) => (
              <PostCard post={post} key={post._id} currentUser={currentUser} />
            ))
          )}
        </div>
        <div className="hidden w-96 p-10 my-2 lg:block">
          <Sidebar currentUser={currentUser} users={users} />
        </div>
      </div>
    </div>
  );
};
