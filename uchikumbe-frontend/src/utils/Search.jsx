import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchField = () => {
  return (
    <div className="flex items-center h-7 mt-1 w-3/4 mx-auto p-1 bg-white rounded-full shadow-md">
      
      <input
        type="text"
        placeholder="Search..."
        className="flex-grow px-4 py-2 ml-2 text-green-600 bg-transparent focus:outline-none"
      />
      
      <div className='flex  items-center rounded-full h-7 w-7 mt-1 p-1'> 
        
        <button className="flex-shrink-0 focus:outline-none">
        <FontAwesomeIcon icon={faSearch} className="h-4 w-4 text-goldenrod hover:text-green-600 " />
        </button> 
      </div>
      
    </div>
  );
};

export default SearchField;
