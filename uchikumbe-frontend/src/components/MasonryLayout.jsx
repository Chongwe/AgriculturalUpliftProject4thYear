import React from 'react'
import Masonry from 'react-masonry-css'
import Posts from './Posts'
// import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"





const breakPointObj = {
    default: 4,
    1200: 3,
    992: 3,
    768:  2,
    576: 1
   
}

// const MasonryLayout = ({ posts }) => {
//   return (
//    <ResponsiveMasonry 
//    columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}} > 
//    <Masonry>
//           {posts?.map((post) => <Posts key={post._id} post={post} className="w-max"/>)}

//    </Masonry>
//    </ResponsiveMasonry>
//   )
// }


const MasonryLayout = ({ posts }) => {
  return (
   <Masonry 
   className="flex sm:flex-col md:flex-row  annimate-slide-fwd" 
   breakPointCols={breakPointObj} > 
      {posts?.map((post) => <Posts key={post._id} post={post} className="w-max"/>)}
   </Masonry>
  )
}

export default MasonryLayout