import React from 'react';
import Img from "../assets/Img.svg"
import RootLayout from '../Layout/RootLayout';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
      <img src={Img} alt="Not found" className='mt-2 h-40'/>
      <h1 className="text-6xl font-bold text-gray-800">Page Not Found</h1>
      <p className="text-gray-800 mt-4">The page you are looking for does not exist.</p>
      {/* <a href="/" className="mt-4 px-4 py-2 text-white rounded-full bg-green-500 hover:bg-green-600 ">
        Go Home
      </a> */}
    </div>
  );
};

export default NotFoundPage;
