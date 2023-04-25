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
            <div className="sm:p-6 w-full border flex justify-between bg-white shadow-lg border-green-200 rounded-lg p-4 ">
              <div className=" justify-center space-x-2">
                <Avatar src={avatar} variant="circular" size="lg" className="ml-8" />
                <h3 className="text-xl  text-green-800">
                  Jimmy Maloya 
                </h3>
              </div>

              <div className="items-center  md:px-20 border-x-2 px-8 border-green-400">
                <span>
                  <h3> <b>Location:</b>  Mulanje</h3>
                </span>
                <span className="gap-y-4">
                   <h3> <b>  Description: </b>Pig farmer</h3>
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
