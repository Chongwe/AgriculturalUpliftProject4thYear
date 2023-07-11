import Avata from "../../assets/avata.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@material-tailwind/react";
import { faComment, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { urlFor } from "../../client";
import React, { useEffect, useState } from "react";
import { formatDistanceToNow, parseISO, isYesterday } from "date-fns";
import { HandThumbUpIcon } from "@heroicons/react/24/solid";

/**
 * Represents a post component.
 *
 * @class
 * @param {Object} props - The component props.
 * @param {Object} props.post - The post data.
 * @param {string} props.post.image - The URL of the post image.
 * @param {string} props.post.content - The content of the post.
 * @param {Array} props.post.comments - The comments of the post.
 * @param {string} props.post._createdAt - The creation date of the post.
 * @param {Array} props.post.like - The likes of the post.
 * @param {string} props.post.title - The title of the post.
 * @param {string} props.post._id - The unique ID of the post.
 * @param {Object} props.post.postedBy - The user who posted the post.
 * @param {string} props.post.forumId - The ID of the forum.
 * @returns {JSX.Element} The rendered post component.
 */
const Posts = ({
  post: {
    image,
    content,
    comments,
    _createdAt,
    like,
    title,
    _id,
    postedBy,
    forumId,
  },
}) => {
  // console.log(comments);
  const [postCreatedAt, setPostCreatedAt] = useState(null);
  const [timeDifference, setTimeDifference] = useState(null);
  // const alreadyLiked = !!(like?.filter((item)=>item.postedBy._id===user.googleId)).length;

  useEffect(() => {
    setPostCreatedAt(parseISO(_createdAt));
  }, [_createdAt]);

  useEffect(() => {
    if (postCreatedAt) {
      if (isYesterday(postCreatedAt)) {
        setTimeDifference("Yesterday");
      } else {
        const difference = formatDistanceToNow(postCreatedAt, {
          addSuffix: true,
        });

        setTimeDifference(difference);
      }
    }
  }, [postCreatedAt]);

  return (
    <div className=" lg:max-w-[600px] sm:m-12 mb-3 transition-all   overflow-wrap break-word  duration-500 lg:hover:scale-105 p-4 bg-white rounded-xl  flex-wrap min-w-screen-sm ">
      <div className="shadow-none justify-between space-x-4 flex  ">
        <div className="flex items-center space-x-2">
          {postedBy?.image ? (
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={postedBy?.image}
              alt="posted-by"
            />
          ) : (
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={Avata}
              alt="general-avatar"
            />
          )}

          <div className=" ">
            <Typography className="mb-2 text-lg  text-goldenrod">
              {postedBy?.userName}
            </Typography>
            <Typography color="gray" className="text-xs -mt-2  " textGradient>
              {timeDifference !== null && <p>{timeDifference}</p>}
            </Typography>
          </div>
        </div>
        <Link to={`/message/${postedBy._id}`}>
          <FontAwesomeIcon
            className="h-7 mr-6 text-green-800 p-2 w-7"
            icon={faEnvelope}
          />
        </Link>
      </div>
      <div className="">
        <div className="mt-2   ">
          <div className=" overflow-hidden ">
            <h3 className="text-green-900"> {title}</h3>
            <p className="border-l  flex duration-75 p-2 border-spacing-2 border-goldenrod">
              {content}
            </p>
          </div>
          {image && (
            <img
              src={urlFor(image).url()}
              alt="post "
              className="flex rounded-b-2xl rounded-t-sm w-full mt-2"
            />
          )}
        </div>
      </div>
      <div className=" flex mt-4 gap-8 justify-center">
        <div className="flex-1">
          <Link to={`/comments/${forumId}/${_id}`}>
            <button className=" bg-green-500 transition-all duration-500 hover:scale-95 hover:bg-goldenrod py-2 px-4  text-white  rounded-xl focus:outline-none">
              <FontAwesomeIcon size="lg" icon={faComment} /> Comment (
              {comments?.length})
            </button>
          </Link>
        </div>
        <div className=" rounded-full justify-end">
          <Link>
            <HandThumbUpIcon className="h-7 w-7  mr-6 text-goldenrod " />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Posts;
