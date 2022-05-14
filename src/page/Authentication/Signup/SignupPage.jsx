import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useSignUpForm, useTogglePassword } from "../../../hooks/hooksExport";
import { userSignUpAction } from "../../../features/authSlice";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export const SignupPage = () => {
  const { signUpErrors, signUpData, setSignUpData, signUpFormHandler } =
    useSignUpForm({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authData = useSelector((state) => state.user);
  const {
    passwordToggle,
    checkPasswordView,
    confirmPasswordToggle,
    checkConfirmPasswordView,
  } = useTogglePassword();

  const signupHandler = async (signUpCredentials) => {
    setSignUpData(signUpCredentials);
    const res = await dispatch(userSignUpAction(signUpCredentials));
    res.payload.encodedToken && navigate("/posts");
  };

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
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(userSignUpAction(signUpData));
        }}
        className="w-full flex justify-center flex-col"
      >
        <input
          required
          onChange={signUpFormHandler}
          name="firstname"
          value={signUpData.firstname}
          className="w-full mt-2 p-2 placeholder:text-sm border rounded-md 
              focus:outline-none focus:border-sky-500"
          type="text"
          placeholder="First name*"
        />
        {signUpErrors.firstname && (
          <p className="text-red-500">{signUpErrors.firstname}</p>
        )}
        <input
          required
          onChange={signUpFormHandler}
          name="lastname"
          value={signUpData.lastname}
          className="w-full mt-2 p-2 placeholder:text-sm border rounded-md 
              focus:outline-none focus:border-sky-500"
          type="text"
          placeholder="Last name*"
        />
        {signUpErrors.lastname && (
          <p className="text-red-500">{signUpErrors.lastname}</p>
        )}
        <input
          required
          onChange={signUpFormHandler}
          name="username"
          value={signUpData.username}
          className="w-full mt-2 p-2 placeholder:text-sm border rounded-md 
              focus:outline-none focus:border-sky-500"
          type="username"
          placeholder="Username*"
        />
        {signUpErrors.username && (
          <p className="text-red-500">{signUpErrors.username}</p>
        )}
        <input
          required
          onChange={signUpFormHandler}
          name="email"
          lastname
          value={signUpData.email}
          className="w-full mt-2 p-2 placeholder:text-sm border rounded-md 
              focus:outline-none focus:border-sky-500"
          type="email"
          placeholder="Email*"
        />
        {signUpErrors.email && (
          <p className="text-red-500">{signUpErrors.email}</p>
        )}
        <div className="relative">
          <input
            required
            onChange={signUpFormHandler}
            name="password"
            value={signUpData.password}
            className="w-full mt-2 p-2 placeholder:text-sm border rounded-md 
              focus:outline-none focus:border-sky-500"
            type={passwordToggle.type}
            placeholder="Password*"
          />
          {!passwordToggle.isShow ? (
            <button type="button" onClick={checkPasswordView}>
              <FaRegEyeSlash className="eyeslash-icon" />
            </button>
          ) : (
            <button type="button" onClick={checkPasswordView}>
              <FaRegEye className="eyeslash-icon" />
            </button>
          )}
        </div>
        {signUpErrors.password && (
          <p className="text-red-500">{signUpErrors.password}</p>
        )}
        <div className="relative">
          <input
            required
            onChange={signUpFormHandler}
            name="confirmpassword"
            value={signUpData.confirmpassword}
            className="w-full mt-2 p-2 placeholder:text-sm border rounded-md 
              focus:outline-none focus:border-sky-500"
            type={confirmPasswordToggle.type}
            placeholder="Confirm password*"
          />
          {!confirmPasswordToggle.isShow ? (
            <button type="button" onClick={checkConfirmPasswordView}>
              <FaRegEyeSlash className="eyeslash-icon" />
            </button>
          ) : (
            <button type="button" onClick={checkConfirmPasswordView}>
              <FaRegEye className="eyeslash-icon" />
            </button>
          )}
        </div>
        {signUpErrors.confirmpassword && (
          <p className="text-red-500">{signUpErrors.confirmpassword}</p>
        )}
        <button
          onClick={() => signupHandler(signUpData)}
          className="px-4 py-1 w-full border-none bg-sky-500 text-white hover:bg-sky-600 
              font-semibold border rounded mt-3"
        >
          {authData.isLoading ? "Loading..." : "Sign up"}
        </button>
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
