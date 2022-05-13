import { omit } from "lodash";
import { useState } from "react";
import { emailRegex, passwordRegex } from "../constants";

const useSignUpForm = () => {
  const [signUpData, setSignUpData] = useState({});
  const [signUpErrors, setSignUpErrors] = useState({});

  const signUpFormHandler = (e) => {
    const { name, value } = e.target;
    validateSignUpForm(name, value);
    setSignUpData({ ...signUpData, [name]: value });
  };

  const validateSignUpForm = (name, value) => {
    switch (name) {
      case "firstname":
        if (value.trim().length === 0)
          setSignUpErrors({
            ...signUpErrors,
            firstname: "First name can't be empty",
          });
        else {
          const newobj = omit(signUpErrors, "firstname");
          setSignUpErrors(newobj);
        }
        break;
      case "lastname":
        if (value.trim().length === 0)
          setSignUpErrors({
            ...signUpErrors,
            lastname: "Last name can't be empty",
          });
        else {
          const newobj = omit(signUpErrors, "lastname");
          setSignUpErrors(newobj);
        }
        break;
      case "username":
        if (value.trim().length === 0)
          setSignUpErrors({
            ...signUpErrors,
            username: "username can't be empty",
          });
        else {
          const newobj = omit(signUpErrors, "username");
          setSignUpErrors(newobj);
        }
        break;
      case "email":
        if (!value.match(emailRegex))
          setSignUpErrors({
            ...signUpErrors,
            email: "Invalid email",
          });
        else {
          const newobj = omit(signUpErrors, "email");
          setSignUpErrors(newobj);
        }
        break;
      case "password":
        if (!value.match(passwordRegex))
          setSignUpErrors({
            ...signUpErrors,
            password: "Invalid password",
          });
        else {
          const newObj = omit(signUpErrors, "password");
          setSignUpErrors(newObj);
        }
        break;
      case "confirmpassword":
        if (value !== signUpData.password)
          setSignUpErrors({
            ...signUpErrors,
            confirmpassword: "Confirm password doesn't match!",
          });
        else {
          const newobj = omit(signUpErrors, "confirmpassword");
          setSignUpErrors(newobj);
        }
        break;

      default:
        return signUpErrors;
    }
  };

  return {
    signUpErrors,
    signUpData,
    setSignUpData,
    signUpFormHandler,
    validateSignUpForm,
  };
};

export { useSignUpForm };
