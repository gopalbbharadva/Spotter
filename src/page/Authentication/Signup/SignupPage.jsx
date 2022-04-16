import React from "react";
import { Link } from "react-router-dom";

export const SignupPage = () => {
  return (
    <div
      className="max-w-full my-5 mx-3 p-3 border rounded-sm flex flex-col 
      sm:w-80 sm:mx-auto md:w-80 xl:w-80 md:mx-auto"
    >
      <h1 className="text-5xl mb-5 font-lobster text-center font-serif ">
        Spotter
      </h1>
      <p className="text-center text-gray-500 font-bold">
        Sign up to see photos and videos from your friends.
      </p>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full flex justify-center flex-col"
      >
        <input
          className="w-full mt-2 p-2 placeholder:text-sm border rounded-md 
              focus:outline-none focus:border-sky-500"
          type="text"
          placeholder="First name*"
        />
        <input
          className="w-full mt-2 p-2 placeholder:text-sm border rounded-md 
              focus:outline-none focus:border-sky-500"
          type="text"
          placeholder="Last name*"
        />
        <input
          className="w-full mt-2 p-2 placeholder:text-sm border rounded-md 
              focus:outline-none focus:border-sky-500"
          type="email"
          placeholder="Email*"
        />
        <input
          className="w-full mt-2 p-2 placeholder:text-sm border rounded-md 
              focus:outline-none focus:border-sky-500"
          type="password"
          placeholder="Password*"
        />
        <input
          className="w-full mt-2 p-2 placeholder:text-sm border rounded-md 
              focus:outline-none focus:border-sky-500"
          type="password"
          placeholder="Confirm password*"
        />
        <Link to="/posts">
          <button
            className="px-4 py-1 w-full border-none bg-sky-500 text-white hover:bg-sky-600 
              font-semibold border rounded mt-3"
          >
            Sign up
          </button>
        </Link>
        <div className="flex items-start">
          <div className="w-3/6 border-t mx-1 self-center border-gray-300"></div>
          <span className="px-2 my-2 text-gray-400 font-semibold text-center">
            OR
          </span>
          <div className="w-3/6 border-t mx-1 self-center border-gray-300"></div>
        </div>
      </form>
      <p className="text-center">
        Already have an account?
        <Link to="/" className="ml-1 text-sky-500">
          Login
        </Link>
      </p>
    </div>
  );
};
