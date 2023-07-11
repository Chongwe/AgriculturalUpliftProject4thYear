import React from "react";
import * as Loader from "react-loader-spinner";

/** 
 * The code defines a functional component called `Spinner` that takes a prop called `message`. Inside
 * the component, it returns JSX code that renders a spinner animation using the `react-loader-spinner`
 * library.
 * @component 
 * @category Reusable Components  

*/
const Spinner = ({ message }) => {
  return (
    <div
      className="flex flex-col justify-center items-center w-full h-full"
      style={{ minHeight: "100vh" }}
    >
      <div className="flex flex-col items-center">
        <Loader.Circles
          color="#428643"
          height={50}
          width={50}
          className="m-s"
        />
        {message && (
          <p className="text-3xl text-goldenrod mt-4 text-center px-2">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Spinner;
