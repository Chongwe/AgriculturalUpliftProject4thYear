import React from "react";
import * as Loader from "react-loader-spinner";

const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col mt-64 mb-96 justify-center items-center w-full h-full">
      <Loader.Circles color="#428643" height={50} width={200} className="m-s" />
      <p className="text-3xl text-goldenrod mt-4 text-center px-2">{message}</p>
    </div>
  );
};

export default Spinner;
