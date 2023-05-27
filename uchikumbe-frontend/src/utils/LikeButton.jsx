import React, { useState } from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const handleClick = () => {
    setLiked(!liked);
    setLikesCount(liked ? likesCount - 1 : likesCount + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {liked ? <FaThumbsDown /> : <FaThumbsUp />}
      </button>
      <span>{likesCount}</span>
    </div>
  );
};

export default LikeButton;
