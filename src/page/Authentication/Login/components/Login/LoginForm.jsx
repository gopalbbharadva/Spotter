import React from "react";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  return (
    <div className="w-full p-3 border rounded-sm flex flex-col  md:w-80 xl:w-80">
      <h1 className="text-5xl mb-10 font-lobster text-center font-serif ">
        Spotter
      </h1>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full flex justify-center flex-col"
      >
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
        <button
          className="px-4 py-1 outlise-2 outline-2 text-sky-500 hover:bg-sky-600 
          hover:text-white font-semibold border rounded mt-5"
        >
          Log in as a Guest
        </button>
        <Link to="/posts">
          <button
            className="px-4 py-1 w-full border-none bg-sky-500 text-white hover:bg-sky-600 
              font-semibold border rounded mt-3"
          >
            Log In
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
      <a
        href="#"
        className="my-3 text-center text-sm text-blue-800 visited:text-purple-600"
      >
        Forgot password?
      </a>
      <p className="text-center">
        Don't have an account?
        <Link to="/signup" className="ml-1 text-sky-500">
          Sign Up
        </Link>
      </p>
    </div>
  );
};
