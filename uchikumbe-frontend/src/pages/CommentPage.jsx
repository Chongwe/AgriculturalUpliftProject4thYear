import React from 'react'
import { useEffect, useState } from "react";
import { postDetailQuery, userQuery } from '../utils/data';
import Spinner from '../components/Spinner';
import { fetchUser } from "../utils/fetchUser";
import { useNavigate, useParams } from "react-router-dom";
import { urlFor, client  } from "../client";







const CommentPage = () => {
  const [user, setUser] = useState(null);
  const userInfo = fetchUser();
  const [post, setPost] = useState(null);
  const {postId} = useParams();

  useEffect(() => {
    const query = userQuery(userInfo?.sub);

    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  });

  useEffect(() => {
    const query = postDetailQuery(postId);

    client.fetch(query).then((data) => {
      setPost(data[0]);
    });
  }, [postId]);

  if (!post) {
    return <Spinner message="Loading Post" />;
  }
  return (
   
    <div className="flex flex-col justify-center items-center h-full mt-5 lg:h-4/5">

      <div className=" flex lg:flex-row flex-col justify-center  rounded-lg bg-green-100 lg:p-5 p-3 lg:w-4/5  w-full">
        <div className="s p-3 flex flex-0.7 rounded-2xl w-full">
        <img src={post?.image && urlFor(post.image).url() } className="flex rounded-b-2xl rounded-t-sm w-full mt-2"/>
        </div>

        <div className="flex flex-1 flex-col gap-6 lg:pl-5 mt-5 w-full">
          <h1>
            {post.postedBy?.userName}

          </h1>
          <h3 className="text-green-900 justify-normal text-2xl"> {post.title}</h3>
          <p className="border-l   duration-75 p-2 border-spacing-2 border-goldenrod">
          {post.content}
          </p>

          <textarea
            type="text"
            placeholder="Write content of your  post here"
            className="outline-none transition-all placeholder-green-100 rounded-xl active:border-b-green-800 duration-500 hover:scale-95 text-base sm:text-lg border-b-2 border-green-200 p-2"
          />

          <div className="flex flex-col">
            <div className="flex justify-end items-end mt-5">
              <button
                type="button"
                className="bg-green-900 hover:bg-goldenrod transition-all duration-500 hover:scale-95 text-white  p-2 rounded-xl w-28 outline-none"
              >
               Comment
              </button>
          </div>
        </div>
        </div>
      </div>
   </div>
  )
}

export default CommentPage