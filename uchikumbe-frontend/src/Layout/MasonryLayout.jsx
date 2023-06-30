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
const MasonryLayout = ({ posts }) => {
  return (
    //  <Masonry
    //  className="flex sm:flex-col md:flex-row  annimate-slide-fwd"
    //  breakpointrows={breakPointObj} >
    //     {posts?.map((post) => <Posts key={post._id} post={post} className="w-max"/>)}
    //  </Masonry>
    <div>
      {posts?.map((post) => (
        <Posts key={post._id} post={post} className="w-max" />
      ))}
    </div>
  );
};

export default MasonryLayout;
