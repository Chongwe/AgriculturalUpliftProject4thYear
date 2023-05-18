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

const MasonryLayout = () => {
  return (
   <Masonry className="flex annimate-slide-fwd" breakPointCols={breakPointObj} > 
   


   </Masonry>
  )
}

export default MasonryLayout