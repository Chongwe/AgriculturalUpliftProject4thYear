
import Avata from "../assets/avata.jpg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Typography,
    IconButton,
    } from"@material-tailwind/react";
import { 
    faComment, 
    faEnvelope, 
    faThumbsUp} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { urlFor, client  } from "../client";
import React, { useEffect, useState } from 'react';
import { formatDistanceToNow, parseISO, isYesterday } from 'date-fns';
import CommentPage from "../pages/CommentPage";

//  

const Posts = ( { post:{ image, content, comment, _createdAt, like, title, _id, postedBy }} ) => {
    const postId = _id;
    
    const [postCreatedAt, setPostCreatedAt] = useState(null);
    const [timeDifference, setTimeDifference] = useState(null);
    const [user, setUser] = useState(null)
    // const alreadyLiked = !!(like?.filter((item)=>item.postedBy._id===user.googleId)).length;

    useEffect(() => {
        setPostCreatedAt(parseISO(_createdAt));
        }, [_createdAt]);
        
        useEffect(() => {
            if (postCreatedAt) {
            const currentTime = new Date();
        
            if (isYesterday(postCreatedAt)) {
                setTimeDifference('Yesterday');
            } else {
                const difference = formatDistanceToNow(postCreatedAt, {
                addSuffix: true,
                });
        
                setTimeDifference(difference);
            }
            }
        }, [postCreatedAt]);



    return (
      

            <div className= "m-8 transition-all overflow-wrap break-word  duration-500 hover:scale-105 p-4 bg-white rounded-xl  flex-wrap max-w-[350px] w-96"> 
                <div  className = "shadow-none justify-between space-x-4 flex  ">
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
                            <Typography  className="mb-2 text-lg  text-goldenrod">
                                {postedBy?.userName}
                            </Typography>
                            <Typography color="gray" className="text-xs -mt-2  " textGradient>
                                {timeDifference !== null && (
                                    <p>{timeDifference}</p>
                                )}
                            </Typography>
                        </div>                     
                    </div>
                    <Link to={`/message/${postedBy._id}`}>
              <IconButton variant="text" color="green" size="xl" className="">
                <FontAwesomeIcon size="2x" icon={faEnvelope} />
              </IconButton>
            </Link>
                </div>
                <div className="">
                    <div className="mt-2   ">
                        <div className="max-w-[340px] overflow-hidden ">
                        <h3 className="text-green-900"> {title}</h3>
                        <p  className="border-l   duration-75 p-2 border-spacing-2 border-goldenrod">
                        {content}
                        </p>
                        </div>
                        {image && <img src={urlFor(image).url() } className="flex rounded-b-2xl rounded-t-sm w-full mt-2"/>}
                    </div>
                </div>
                <div className=" flex mt-4 gap-8 justify-center"> 
                    <div className="flex-1">
                        <Link to={`comments/${_id}`} >
                            <button class=" bg-green-500 transition-all duration-500 hover:scale-95 hover:bg-goldenrod py-2 px-4  text-white  rounded-xl focus:outline-none">
                                <FontAwesomeIcon size="lg" icon={faComment} />  Comment...
                            </button>
                        </Link>
                    </div>
                    <div className=" rounded-full justify-end">
                        <Link to="/message">
                            <IconButton  variant="text"  color="green">
                            <FontAwesomeIcon size="2x" color="goldenrod" icon={faThumbsUp} />
                            </IconButton> 
                        </Link>
                    </div> 
                </div>           
            </div>
    )
}
export default Posts



