
import Picture from "../assets/insect.jpg"
import Avata from "../assets/avatar.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Typography,
    IconButton,
    Avatar} from"@material-tailwind/react";
import { 
    faComment, 
    faEnvelope, 
    faThumbsUp} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { urlFor, client  } from "../client";
//  

const Posts = ( { post:{ image, content, title, _id, postedBy}} ) => {
    
    return (
        <div className= "m-8  p-4 bg-white rounded-xl flex-wrap max-w-[300px] w-96"> 
            <div  className = "shadow-none justify-between space-x-4 flex  ">
                <div className="flex space-x-2">
                    <img 
                    className="w-10 h-10 rounded-full object-cover"
                    src={postedBy?.image}
                    alt="posted-by"
                    />
                    <div className=" ">
                        <Typography  className="mb-2 text-lg  text-goldenrod">
                                {postedBy?.userName}
                        </Typography>
                        <Typography color="gray" className="text-xs  " textGradient>
                                33m ago
                        </Typography>
                    </div>                     
                </div>
                <div className="">
                    <IconButton variant="text" color="green" size="lg">
                    <FontAwesomeIcon size="2x" icon={faEnvelope} />
                    </IconButton>
                </div>
            </div>
            <div className="">
                <div className="mt-2">
                    <h3 className="text-green-900"> {title}</h3>
                    <p  className="border-l duration-75 p-2 border-spacing-2 border-goldenrod">
                       {content}
                    </p>
                    {image && <img src={urlFor(image).url() } className="flex  w-full mt-2"/>}
                </div>
            </div>
            <div className=" flex mt-4 gap-8 justify-center"> 
                <div className="flex-1">
                    <button class=" bg-green-500 hover:bg-goldenrod py-2 px-4  text-white  rounded-full focus:outline-none">
                        <FontAwesomeIcon size="lg" icon={faComment} />  Comment...
                    </button>
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



