import React from 'react'
import Masonry from 'react-masonry-css'
import Posts from './Posts'

const breakPointObj = {
    default: 4,
    3000: 6,
    2000: 5,
    1200: 3,
    1000: 2,
    500:  1,


}

const MasonryLayout = ({ posts }) => {
  return (
   <Masonry className="flex annimate-slide-fwd" breakPointCols={breakPointObj} > 
      {posts?.map((post) => <Posts key={post._id} post={post} className="w-max"/>)}


   </Masonry>
  )
}

export default MasonryLayout