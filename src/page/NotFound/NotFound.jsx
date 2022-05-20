import React from "react";
import ErrorPage from "../../assets/ErrorPage.svg";

export const NotFound = () => {
  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <img src={ErrorPage} className="max-w-lg" alt="error page" />
      <p className="text-red-500">Page not found</p>
    </div>
  );
};
