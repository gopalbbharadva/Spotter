import React, { useEffect, useState } from "react";
import {
  PostCard,
  Loader,
  ProfileModal,
  FollowCombineModal,
} from "../../components/componentExport";
import { AiOutlineLogout } from "react-icons/ai";
import { logoutUser } from "../../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  followUser,
  getAllUsers,
  unFollowUser,
} from "../../features/usersSlice";
import { getAllPosts } from "../../features/postSlice";

export const Profile = () => {
  const [isEditProfile, setIsEditProfile] = useState(false);
  const [isFollowersList, setIsFollowersList] = useState(false);
  const [isFollowingList, setIsFollowingList] = useState(false);

  const dispatch = useDispatch();
  const { userName } = useParams();
  const {
    auth: { user, token },
    allUsers: { users, isLoading },
    allPosts: { posts },
  } = useSelector((state) => state);

  const currentUser = users?.find((user) => user.username === userName);
  const loggedInUser = users?.find(
    ({ username }) => username === user.username
  );

  const isFollowing = loggedInUser?.following.find(
    (user) => currentUser?.username === user.username
  );
 
  const currentUserPosts = posts?.filter(
    (post) => post.username === currentUser?.username
  );

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllPosts());
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-screen p-2 ">
          {isEditProfile && (
            <ProfileModal
              currentUser={currentUser}
              setIsEditProfile={setIsEditProfile}
            />
          )}
          {isFollowersList && currentUser.followers.length > 0 && (
            <FollowCombineModal
              userList={currentUser.followers}
              setShowFollowModal={setIsFollowersList}
            />
          )}
          {isFollowingList && currentUser.following.length > 0 && (
            <FollowCombineModal
              userList={currentUser.following}
              setShowFollowModal={setIsFollowingList}
            />
          )}
          <div className="card-container">
            <div className="profile-area">
              <div className="w-20 h-20 xs:w-32 xs:h-32 flex xs:self-center flex-shrink-0">
                {currentUser?.profileImg === "" ? (
                  <div className="profile-avatar dummy-avatar">
                    {currentUser.firstname[0]} {currentUser.lastname[0]}
                  </div>
                ) : (
                  <img
                    className="profile-avatar"
                    src={currentUser?.profileImg}
                    alt={currentUser?.username}
                  />
                )}
              </div>
              <div className="w-full flex-wrap  flex m-0 p-2 xs:p-3 xs:ml-2 sm:w-3/5 flex-col ">
                <div className="flex flex-wrap items-center">
                  <p className="text-2xl mr-3 text-sky-500">
                    {currentUser?.username}
                  </p>
                  {user.username !== currentUser?.username ? (
                    isFollowing ? (
                      <button
                        onClick={() =>
                          dispatch(
                            unFollowUser({ userId: currentUser._id, token })
                          )
                        }
                        className="unfollow-btn"
                      >
                        Unfollow
                      </button>
                    ) : (
                      <button
                        onClick={() =>
                          dispatch(
                            followUser({ userId: currentUser._id, token })
                          )
                        }
                        className="follow-btn"
                      >
                        Follow
                      </button>
                    )
                  ) : (
                    <>
                      <button
                        onClick={() => setIsEditProfile((prev) => !prev)}
                        className="edit-profile-btn"
                      >
                        Edit profile
                      </button>
                      <button onClick={() => dispatch(logoutUser())}>
                        <AiOutlineLogout className="text-2xl hover:text-sky-500" />
                      </button>
                    </>
                  )}
                </div>
                <div className="mt-4 flex justify-between flex-wrap">
                  <p className="text-gray-500 select-none">
                    <span>4</span> posts
                  </p>
                  <button
                    onClick={() => setIsFollowersList(true)}
                    className={`text-gray-500 `}
                  >
                    <span>{currentUser?.followers.length}</span> followers
                  </button>
                  <button
                    onClick={() => setIsFollowingList(true)}
                    className={`text-gray-500`}
                  >
                    <span>{currentUser?.following.length}</span> following
                  </button>
                </div>
                <div className="mt-4">
                  <p className="font-bold text-md">
                    {currentUser?.firstname} {currentUser?.lastname}
                  </p>
                  <p className="text-gray-600 text-sm">{currentUser?.bio}</p>
                  <a
                    href={currentUser?.website}
                    target="_blank"
                    className="text-sky-500 text-sm"
                  >
                    {currentUser?.website}
                  </a>
                </div>
              </div>
            </div>
            <div
              className="mt-5 w-full flex justify-center items-center 
              flex-col max-w-full lg:w-2/3 "
            >
              {currentUserPosts.length > 0 ? (
                currentUserPosts.map((post) => (
                  <PostCard post={post} key={post._id} />
                ))
              ) : (
                <p className="text-2xl">No Posts</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
