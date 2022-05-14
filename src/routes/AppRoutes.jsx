import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, PostsPage, Profile, SignupPage } from "../page/pageExport";
import { PrivateRoute } from "./PrivateRoute";

export const AppRoutes = () => {
  const authData = useSelector((state) => state.user);

  return (
    <Routes>
      <Route
        path="/posts"
        element={
          <PrivateRoute>
            <PostsPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      {!authData.token ? (
        <>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />{" "}
        </>
      ) : (
        <>
          <Route path="/" element={<Navigate replace to="/posts" />} />
          <Route path="/signup" element={<Navigate replace to="/posts" />} />
        </>
      )}
    </Routes>
  );
};
