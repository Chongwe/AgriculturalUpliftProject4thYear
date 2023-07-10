import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";
import { urlFor, client } from "../client";

const Carousel = () => {
  const [carouselData, setCarouselData] = useState([]); // State to hold carousel data
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current index
  const [isLoading, setIsLoading] = useState(true); // State to track loading state

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
        setCarouselData(response); // Update carousel data state with the fetched data
        setIsLoading(false); // Set loading state to false once data is fetched
      } catch (error) {
        console.error("Error fetching carousel data:", error);
        setIsLoading(false); // Set loading state to false if there's an error
      }
    };

    fetchCarouselData(); // Call the function to fetch carousel data when component mounts
  }, []);

  useEffect(() => {
    // Auto-rotate the carousel every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);

    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
    };
  }, [carouselData]);

  if (isLoading) {
    return <Spinner />; /* Show a spinner while the data is being fetched*/
  }

  if (carouselData.length === 0 || !carouselData[currentIndex]) {
    return (
      <p className="fixed ml-9 text-goldenrod">No carousel data available.</p>
    ); /* Display a message if there's no carousel data or the current index is invalid */
  }

  const { title, description, image } = carouselData[currentIndex]; /**  Destructure the data for the current index */

  return (
    <div className="ml-9 max-w-[250px] hover:scale-95 fixed p-2 items-center transition-all h-auto duration-500 rounded-xl shadow-lg">
      <div className="max-w-56 overflow-hidden rounded-xl max-h-36">
        {image && (
          <img src={urlFor(image).url()} className="w-full h-auto" /> /**Render the image if it exists*/
        )}
      </div>
      <div className="">
        <h2 className="text-goldenrod mt-2 text-2xl">{title}</h2> 
        <p className="carousel-description whitespace-normal overflow-ellipsis">
          {description} 
        </p>
      </div>
    </div>
  );
};

export default Carousel;
