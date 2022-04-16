import React from "react";
import { Featurelist } from "./Featurelist";

export const Navbar = () => {
  return (
    <nav className="p-3 top-0 sticky z-10 shadow-md shadow-sky-100 bg-white">
      <div className="flex justify-evenly items-center">
        <h1 className="text-3xl font-lobster text-sky-500 cursor-pointer">
          Spotter
        </h1>
        <input
          className="p-1 max-w-xs mx-2 w-full border rounded bg-gray-100 
          focus:outline-none focus:border-sky-500"
          type="text"
          placeholder="Search"
        />
        <div className="flex justify-center items-center">
          <div className="features hidden text-2xl  lg:flex">
            <Featurelist />
          </div>
          <div className="w-8 h-8 cursor-pointer">
            <img
              className="w-full h-full object-cover rounded-full "
              src="https://treatiseui.netlify.app/Images/ian-dooley-lg.jpg"
            />
          </div>
        </div>
        <div
          className="features flex p-2 justify-between w-full border 
        fixed bottom-0 text-2xl lg:hidden bg-white"
        >
          <Featurelist />
        </div>
      </div>
    </nav>
  );
};
