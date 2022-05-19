import React from "react";

export const DummyAvatar = ({ firstname, lastname }) => {
  return (
    <div className="profile-avatar dummy-avatar">
      {firstname && firstname[0]} {lastname && lastname[0]}
    </div>
  );
};
