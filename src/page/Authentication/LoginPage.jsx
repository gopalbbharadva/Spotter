import React from "react";
import { HeroSection, LoginForm } from "./Login/components/LoginPageExport";

export const LoginPage = () => {
  return (
    <div className="flex mt-8">
      <div className="w-full p-4 m-auto md:flex lg:w-max">
        <HeroSection />
        <LoginForm />
      </div>
    </div>
  );
};
