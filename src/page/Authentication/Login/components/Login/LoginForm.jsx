import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLoginForm } from "../../../../../hooks/hooksExport";
import { userLoginAction } from "../../../../../features/authSlice";
import { guestUser } from "../../../../../constants";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export const LoginForm = () => {
  const { loginData, loginErrors, setLoginData, loginFormHandler } =
    useLoginForm();
  const [showPassword, setShowPassword] = useState({
    type: "password",
    isShow: false,
  });
  const dispatch = useDispatch();
  const authData = useSelector((state) => state.user);
  const navigate = useNavigate();

  const loginHandler = async (loginCredentials) => {
    setLoginData(loginCredentials);
    const res = await dispatch(userLoginAction(loginCredentials));
    res.payload.encodedToken && navigate("/posts");
  };

  return (
    <div className="m-auto w-80 max-w-full p-3 border rounded-sm flex flex-col xl:w-80">
      <h1 className="text-5xl mb-10 font-lobster text-center font-serif ">
        Spotter
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(userLoginAction(loginData));
        }}
        className="w-full flex justify-center flex-col"
      >
        <input
          required
          onChange={(e) => loginFormHandler(e)}
          name="username"
          value={loginData.username}
          className="w-full mt-2 p-2 placeholder:text-sm border rounded-md 
              focus:outline-none focus:border-sky-500"
          type="text"
          placeholder="Username*"
        />
        {loginErrors.username && (
          <p className="text-red-500">{loginErrors.username}</p>
        )}
        <div className="relative">
          <input
            required
            onChange={(e) => loginFormHandler(e)}
            name="password"
            value={loginData.password}
            className="w-full mt-2 p-2 placeholder:text-sm border rounded-md 
              focus:outline-none focus:border-sky-500"
            type={showPassword.type}
            placeholder="Password*"
          />
          {!showPassword.isShow ? (
            <button
              type="button"
              onClick={() => setShowPassword({ type: "text", isShow: true })}
            >
              <FaRegEyeSlash className="eyeslash-icon" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() =>
                setShowPassword({ type: "password", isShow: false })
              }
            >
              <FaRegEye className="eyeslash-icon" />
            </button>
          )}
        </div>
        {loginErrors.password && (
          <p className="text-red-500">{loginErrors.password}</p>
        )}
        <button
          type="button"
          onClick={() => loginHandler(guestUser)}
          className="px-4 py-1 outlise-2 outline-2 text-sky-500 hover:bg-sky-600 
          hover:text-white font-semibold border rounded mt-5"
        >
          {authData.isLoading ? "Loding..." : "Log in as a Guest"}
        </button>
        <button
          className="px-4 py-1 w-full border-none bg-sky-500 text-white hover:bg-sky-600 
              font-semibold border rounded mt-3"
        >
          Log In
        </button>
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
