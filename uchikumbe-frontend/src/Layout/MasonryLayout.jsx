import React from "react";
import Masonry from "react-masonry-css";
import Posts from "../components/Cards/Posts";
const breakPointObj = {
  default: 4,
  1200: 3,
  992: 3,
  768: 2,
  576: 1,
};
/* The code is defining a functional component called `MasonryLayout` that takes in a prop called
`posts`. Inside the component, it returns a JSX element that renders a `<div>` element. */
const MasonryLayout = ({ posts }) => {
  return (
   
    <div>
      {posts?.map((post) => (
        <Posts key={post._id} post={post} className="w-max" />
      ))}
    </div>
  );
};

export default MasonryLayout;
