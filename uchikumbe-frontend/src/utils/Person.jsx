import React from "@material-tailwind/react";
import avatar from "../assets/avatar.png";
import { Avatar } from "@material-tailwind/react";
import {
  IconButton,
} from "@material-tailwind/react";
import {
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink} from "react-router-dom";

function Person(props){
    return(
      
        <div className="bg-white  rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-sans font-semibold text-goldenrod  px-40">{props.title}</h3>
            </div>
            <div className=" px-40 ">
                <div className="flex items-center my-2 space-x-4 border-b border-grey-500">
                    <Avatar src={avatar} size="sm" />
                    <div className="flex-1">
                        <h4 className="text-lg font-medium text-uchiGreen">{props.name}</h4>
                        <p className="text-sm mb-1 text-goldenrod">{props.description}</p>
                    </div>
                    <div className="ml-auto">
                        <Link to="/message">
                            <IconButton variant="text" color="green" size="xl" className="">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </IconButton>
                        </Link>
                    </div>
                </div>
            </div>
       </div>
    )
}
 
export default Person