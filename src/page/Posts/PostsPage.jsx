import React, { useEffect, useState } from "react";
import { Loader, PostCard, Sidebar } from "../../components/componentExport";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineAdjustments } from "react-icons/hi";
import { getAllUsers } from "../../features/usersSlice";
import {
  getAllPosts,
  sortByLatest,
  sortByOldest,
  sortByTrending,
} from "../../features/postSlice";

export const PostsPage = () => {
  const dispatch = useDispatch();

  const {
    auth: { user },
    allUsers: { users },
    allPosts: { posts, isLoading },
    bookmarks: { isLoading: isBookMarkLoading },
  } = useSelector((state) => state);

  const currentUser = users?.find(({ username }) => username === user.username);
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [sortStatus, setSortStatus] = useState();

  const sortByTrendingHanlder = () => {
    setShowSortOptions(false);
    dispatch(sortByTrending());
    setSortStatus("Trending");
  };

  const sortByLatestHandler = () => {
    setShowSortOptions(false);
    dispatch(sortByLatest());
    setSortStatus("Latest First");
  };

  const sortByOldestHandler = () => {
    setShowSortOptions(false);
    dispatch(sortByOldest());
    setSortStatus("Oldest First");
  };

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllPosts());
  }, []);

  return (
    <div
      className="px-2 flex justify-center items-start 
    min-h-screen"
    >
      <div className="flex flex-col items-end lg:w-2/3 ">
        <div className="w-full max-w-xl mt-3 flex justify-between items-center">
          <p className="text-sky-500 text-xl">{sortStatus} Posts</p>
          <div className="relative">
            <button
              onClick={() => setShowSortOptions((prev) => !prev)}
              className="mt-5 mr-2 text-sky-500"
            >
              <HiOutlineAdjustments className="text-2xl" />
            </button>
            {showSortOptions ? (
              <div
                className="absolute w-max flex flex-col items-start border border-sky-500 
                bg-white p-3 right-3 top-12 rounded-md"
              >
                <button
                  className="text-gray-600 hover:text-sky-500 py-1"
                  onClick={sortByTrendingHanlder}
                >
                  Trending
                </button>
                <button
                  onClick={sortByLatestHandler}
                  className="text-gray-600 hover:text-sky-500 py-1"
                >
                  Latest First
                </button>
                <button
                  onClick={sortByOldestHandler}
                  className="text-gray-600 hover:text-sky-500 py-1"
                >
                  Oldest First
                </button>
              </div>
            ) : null}
          </div>
        </div>
        <div className="w-full max-w-xl flex justify-center items-center flex-col ">
          {isLoading || isBookMarkLoading ? (
            <Loader />
          ) : (
            posts.map((post) => (
              <PostCard post={post} key={post._id} currentUser={currentUser} />
            ))
          )}
        </div>
      </div>
      <div className="hidden w-96 p-10 my-2 lg:block">
        <Sidebar currentUser={currentUser} users={users} />
      </div>
    </div>
  );
};
