import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";
import { urlFor, client  } from "../client";


const Carousel = () => {
  const [carouselData, setCarouselData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch carousel data from Sanity
    const fetchCarouselData = async () => {
      try {
        const response = await client.fetch(
          `*[_type == "sidebar"]{
            title,
            content,
            image
          }`
        );
        setCarouselData(response);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching carousel data:", error);
        setIsLoading(false);
      }
    };

    fetchCarouselData();
  }, []);

  useEffect(() => {
    // Auto-rotate the carousel every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, [carouselData]);

  if (isLoading) {
    return <Spinner message="Loading..." />;
  }

  if (carouselData.length === 0 || !carouselData[currentIndex]) {
    return <p>No carousel data available.</p>;
  }

  const { title, content, image } = carouselData[currentIndex];

  return (
    <div className="carousel  ml-9 max-w-[250px]  hover:scale-95 fixed p-2 items-center transition-all h-[350px] duration-500 rounded-xl shadow-sm">
      <div className=" ">
            {image && <img src={urlFor(image).url() } className="flex rounded-xl  w-full mt-4"/>}

      </div>
      <div className="">
        <h2 className="text-goldenrod text-xl">{title}</h2>
        <p className="carousel-description whitespace-normal overflow-ellipsis ">{content}</p>
      </div>
     
     
    </div>
  );
};

export default Carousel;
