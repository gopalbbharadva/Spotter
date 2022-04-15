import React from "react";
import HeroImage from "../../../../../assets/HeroImage.svg";

export const HeroSection = () => {
  return (
    <img
      className="hidden mr-3 md:block md:max-w-lg"
      src={HeroImage}
      alt="Hero Image"
    />
  );
};
