import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  DummyAvatar,
  Loader,
  User,
} from "../../../../components/componentExport";
import { filterUsers } from "./Utils/SearchUsers";

export const Sidebar = ({ currentUser, users }) => {
  const {
    auth: {
      user: { username },
    },
  } = useSelector((state) => state);

  const [searchText, setSearchText] = useState("");

  const { isLoading } = useSelector((state) => state.allUsers);
  const suggestedUsers = users?.filter((item) => item.username !== username);
  const filteredUsers = filterUsers(suggestedUsers, searchText);

  const filterBySearch = (e) => setSearchText(e.target.value);

  const debounce = (cb, delay) => {
    let timer;
    return (e) => {
      clearTimeout(timer);
      timer = setTimeout(() => cb(e), delay);
    };
  };
  const searchFilter = debounce(filterBySearch, 500);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Link to={`/profile/${username}`}>
            <div className="flex justify-start items-center cursor-pointer">
              <div className="w-16 h-16">
                {currentUser?.profileImg === "" ? (
                  <DummyAvatar
                    firstname={currentUser?.firstname}
                    lastname={currentUser?.lastname}
                  />
                ) : (
                  <img
                    className="profile-avatar"
                    src={currentUser?.profileImg}
                    alt={currentUser?.username}
                  />
                )}
              </div>
              <p className="ml-2 text-sm">{currentUser?.username}</p>
            </div>
          </Link>

          <p className="mt-5 text-sky-500">Suggestions for you</p>
          <input
            onChange={searchFilter}
            className="p-1 max-w-xs my-2 w-full border rounded 
          focus:outline-none focus:border-sky-500"
            type="search"
            placeholder="Search"
          />
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <User suggestedUser={user} key={user._id} />
            ))
          ) : (
            <p className="text-center">No user found</p>
          )}
        </div>
      )}
    </>
  );
};
