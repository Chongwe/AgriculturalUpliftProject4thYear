import React from "react";
import Img from "../assets/Img.svg";

const PageBlocked = () => {
  return (
    <div className="flex flex-col p-4 items-center justify-center h-screen bg-white">
      <img src={Img} alt="Not found" className="mt-2  h-40" />
      <h1 className="text-6xl font-bold text-goldenrod">Page Not Found</h1>
      <p className="text-green-800 mt-4">
        The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default PageBlocked;
