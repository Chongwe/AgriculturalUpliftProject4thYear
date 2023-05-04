import React from "react";
import cow from "../assets/cow.jpg"
import fertilizer from "../assets/fertilizer.jpg"
import weeds from "../assets/weeds.jpg"

const NewsPage = () => {
  return (
    <div className="flex flex-col mt-6 gap-12 md:flex-row bg-green-100">

      <div className="md:w-full  p-4">
        <h1 className="text-3xl font-bold mb-4">Latest News</h1>
        <div className="flex flex-col md:flex-row">

          <div className="w-full md:w-1/2 md:pr-4 mb-4">
            <img
              src={weeds}
              alt="News Article"
              className="w-full h-48 object-cover"
            />
            <h2 className="text-lg font-bold mt-2 mb-1">
            Dolor sit amet, consectetur adipiscing elit
            </h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
              neque sed lectus aliquam ultricies eget eu elit. Proin suscipit
              aliquet lectus, sed malesuada augue mattis id.
            </p>
          </div>

          <div className="w-full md:w-1/2 md:pr-4 mb-4">
            <img
              src={fertilizer}
              alt="News Article"
              className="w-full h-48 object-cover"
            />
            <h2 className="text-lg font-bold mt-2 mb-1">
              Tipsum dolor sit amet, consectetur adipiscing elit.
            </h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
              neque sed lectus aliquam ultricies eget eu elit. Proin suscipit
              aliquet lectus, sed malesuada augue mattis id.
            </p>
          </div>

          <div className="w-full md:w-1/2 md:pl-4 mb-4">
            <img
              src={cow}
              alt="News Article"
              className="w-full h-48 object-cover"
            />
            <h2 className="text-lg font-bold mt-2 mb-1">
              Taliquam ultricies eget eu elit. Proin suscipi
            </h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
              neque sed lectus aliquam ultricies eget eu elit. Proin suscipit
              aliquet lectus, sed malesuada augue mattis id.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
