import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({children}) => {
  const authData = useSelector((state) => state.user);
  const location = useLocation();
  return (
    <div>
      {authData.token ? (
        children
      ) : (
        <Navigate to="/" state={{ from: location }} replace />
      )}
    </div>
  );
};
