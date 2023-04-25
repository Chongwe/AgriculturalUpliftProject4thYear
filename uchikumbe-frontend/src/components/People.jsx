import React from "react";
import {IconButton,} from "@material-tailwind/react";
import { Avatar } from "@material-tailwind/react";
import avatar from "../assets/avatar.png";
import {faEnvelope,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const People = () => {
  return (
        <div className="p-4 lg:mx-10 mt-2">
        <h1 className="text-3xl text-center p-4 mt-2 font-large text-green-900 pr-10">Members</h1>
            <div className="sm:p-6 w-full border  bg-gray-100 shadow-sm border-green-200 rounded-lg p-4 ">
              <div className="flex items-center space-x-2">
                <Avatar src={avatar} size="lg" />
                <span className="text-lg  font-medium text-green-800">
                  Jimmy Maloya 
                </span>
              </div>
              <div className=" flex justify-end ">
                <IconButton variant="text" color="green" size="lg">
                  <FontAwesomeIcon icon={faEnvelope} />
                </IconButton>
              </div>
            </div>
   </div>
  );
};

export default People;
