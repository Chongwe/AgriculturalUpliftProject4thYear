
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

export default function Posts(props) {
    return (
        <div className= "m-8  p-4 bg-white rounded-xl flex-wrap min-w-[300px] w-96"> 
            <div  className = "shadow-none justify-between space-x-4 flex  ">
                <div className="flex space-x-2">
                    <Avatar src={Avata} alt = "avatar" variant="circular"></Avatar>
                    <div className=" ">
                        <Typography  className="mb-2 text-lg  text-goldenrod">
                                {props.name}
                        </Typography>
                        <Typography color="gray" className="text-xs  " textGradient>
                                33m ago
                        </Typography>
                    </div>                     
                </div>
                <div className="">
                    <IconButton variant="text" color="green" size="lg">
                    <FontAwesomeIcon icon={faEnvelope} />
                    </IconButton>
                </div>
            </div>
            <div className="">
                <div className="mt-2">
                    <p className="border-l duration-75 p-2 border-spacing-2 border-goldenrod">
                       {props.content}
                    </p>
                    <img src={Picture} className="flex mt-2"/>
                </div>
            </div>
            <div className=" flex mt-4 gap-8 justify-center"> 
                <div className="flex-1">
                    <button class=" bg-green-500 hover:bg-goldenrod py-2 px-4  text-white  rounded-full focus:outline-none">
                        <FontAwesomeIcon icon={faComment} />  Comment...
                    </button>
                </div>
                <div className=" justify-end">
                    <Link to="/message">
                        <IconButton  variant="text" size="lg" color="green">
                        <FontAwesomeIcon icon={faThumbsUp} />
                        </IconButton> 
                    </Link>
                </div> 
            </div>           
        </div>
    )
}



