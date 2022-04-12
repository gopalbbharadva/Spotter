import React from "react";
import { HeroSection, LoginPage } from "../components/HomeCompExport";

export const HomePage = () => {
  return (
    <div className="flex mt-8">
      <div className="w-full p-4 m-auto md:flex lg:w-max">
        <HeroSection />
        <LoginPage />
      </div>
    </div>
  );
};
