import React from "react";

export const DummyAvatar = ({ firstname, lastname }) => {
  return (
    <div className="profile-avatar dummy-avatar">
      {firstname[0]} {lastname[0]}
    </div>
  );
};
