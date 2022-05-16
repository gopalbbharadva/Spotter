import React, { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { FiCamera } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../features/usersSlice";
import { DummyAvatar } from "../../../components/componentExport";

export const ProfileModal = ({ currentUser, setIsEditProfile }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [image, setImage] = useState("");
  const [updateProfileData, setUpdateProfileData] = useState(currentUser);

  let imageHandler = (e) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      if (reader.readyState === 2) setImage(reader.result);
    };
  };

  return (
    <div className="post-modal-container">
      <div className="post-modal">
        <button
          onClick={() => setIsEditProfile((prev) => !prev)}
          className="modal-close-btn"
        >
          <VscChromeClose />
        </button>
        <form
          className="profile-form"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              updateUser({
                userData: {
                  ...updateProfileData,
                  profileImg:
                    image !== "" ? image : updateProfileData.profileImg,
                },
                token,
              })
            );
            setIsEditProfile(false);
          }}
        >
          <div className="w-16 h-16 flex-shrink-0 relative">
            {updateProfileData.profileImg === "" ? (
              <DummyAvatar
                firstname={updateProfileData.firstname}
                lastname={updateProfileData.lastname}
              />
            ) : (
              <img
                className="profile-avatar"
                src={image !== "" ? image : updateProfileData.profileImg}
                alt="profile dp"
              />
            )}
            <label className="cursor-pointer absolute rounded-sm right-1 top-12">
              <span className="rounded-full flex justify-center items-center w-6 h-6 bg-white">
                <FiCamera />
              </span>
              <input
                onChange={(e) => imageHandler(e)}
                accept="image/*"
                type="file"
                className="hidden"
              />
            </label>
          </div>
          <p className="mt-4">Username</p>
          <p className="text-gray-500">{updateProfileData.username}</p>
          <p className="mt-4">Name</p>
          <p className="text-gray-500">
            {updateProfileData.firstname} {updateProfileData.lastname}
          </p>
          <label className="mt-4" htmlFor="bio">
            Bio
          </label>
          <input
            onChange={(e) =>
              setUpdateProfileData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            id="bio"
            name="bio"
            className="text-gray-500 text-center"
            value={updateProfileData.bio}
            placeholder="Bio..."
            type="text"
          />
          <label className="mt-4" htmlFor="website">
            Website
          </label>
          <input
            onChange={(e) =>
              setUpdateProfileData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            name="website"
            type="text"
            id="website"
            placeholder="Website..."
            value={updateProfileData.website}
            className="text-gray-500 text-center"
          />
          <div className="btn-area">
            <button>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};
