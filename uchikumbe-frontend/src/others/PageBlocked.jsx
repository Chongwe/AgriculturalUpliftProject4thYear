import React from "react";

/**
 * The PageBlocked function returns a React component that displays a message indicating that the page
 * does not exist
 * @component .
 * @returns The PageBlocked component is returning a JSX element.
 */

const PageBlocked = () => {
  return (
    <div className="flex flex-col p-4 items-center justify-center h-screen bg-white">
      <h1 className="text-6xl font-bold text-goldenrod">Page Blocked</h1>
      <p className="text-green-800 mt-4">
        The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default PageBlocked;
