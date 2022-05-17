import React, { useEffect } from "react";
import { PostCard, Sidebar } from "../../components/componentExport";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../features/usersSlice";

export const PostsPage = () => {
  const dispatch = useDispatch();

  const {
    auth: { user },
    allUsers: { users },
  } = useSelector((state) => state);

  const currentUser = users?.find(({ username }) => username === user.username);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div className="px-2 flex flex-col min-h-screen">
      <div className="flex justify-center">
        <div>
          <PostCard currentUser={currentUser} />
          <PostCard currentUser={currentUser} />
        </div>
        <div className="hidden w-96 p-10 my-2 lg:block">
          <Sidebar currentUser={currentUser} users={users} />
        </div>
      </div>
    </div>
  );
};
