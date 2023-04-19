import React from "react";

const SearchField = () => {
  return (
    <div className="flex items-center h-10 rounded-full overflow-hidden">
      <input
        className="w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"
        type="text"
        placeholder="Search..."
      />
      <button
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-r-full focus:outline-none"
        type="button"
      >
        Search
      </button>
    </div>
  );
};

export default SearchField;
