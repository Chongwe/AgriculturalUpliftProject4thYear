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
          `*[_type == "news"]{
            title,
            description,
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
    return <Spinner  />;
  }

  if (carouselData.length === 0 || !carouselData[currentIndex]) {
    return <p className=" fixed ml-9 text-goldenrod">No carousel data available.</p>;
  }

  const { title, description, image } = carouselData[currentIndex];

  return (
    <div className=" ml-9 max-w-[250px]  hover:scale-95 fixed p-2 items-center transition-all h-auto duration-500 rounded-xl shadow-lg">
      <div className="  max-w-56 overflow-hidden rounded-xl max-h-36">
            {image && <img src={urlFor(image).url() } className="   w-full h-auto "/>}

      </div>
      <div className="">
        <h2 className="text-goldenrod mt-2 text-2xl">{title}</h2>
        <p className="carousel-description whitespace-normal overflow-ellipsis ">{description}</p>
      </div>
     
     
    </div>
  );
};

export default Carousel;
