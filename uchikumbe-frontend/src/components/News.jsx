import React from 'react';

const NewsComponent = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full"
        src="https://via.placeholder.com/400x200"
        alt="News"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">News Title</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
          felis vitae ex interdum consequat. Nullam eu sapien rutrum, dignissim
          turpis at, lacinia tortor.
        </p>
      </div>
    </div>
  );
};

export default NewsComponent;
