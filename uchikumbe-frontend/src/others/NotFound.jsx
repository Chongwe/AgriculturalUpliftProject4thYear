import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-gray-600 mt-2">Page Not Found</p>
      <p className="text-gray-600 mt-2">The page you are looking for does not exist.</p>
      <a href="/" className="mt-4 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded">
        Go Home
      </a>
    </div>
  );
};

export default NotFoundPage;
