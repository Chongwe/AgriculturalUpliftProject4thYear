import React from "@material-tailwind/react";
import avatar from "../assets/avata.jpg";
import { Avatar } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";

function Person(props) {
  return (
    <div className="bg-white transition-all lg:w-full min-w-screen-d pt-4  duration-200 hover:bg-green-100 mx-auto align-middle sm:p-4 rounded-lg p-2">
      <div className="flex items-center justify-between mb-2"></div>
      <div className="md:px-8 sm:ml-8 sm:px-8 ">
        <div className="flex items-center  space-x-4 border-b border-green-100">
          <img
            alt="user image"
            src={props.avatar}
            className="mb-1 rounded-full h-10 w-10"
          />
          <div className="flex-1">
            <h4 className="text-lg font-medium text-uchiGreen">{props.name}</h4>
          </div>
          <div className=" flex items-center ml-auto">
            <Link to={`/message/${props.user_id}`}>
                <FontAwesomeIcon className="h-5 w-5 text-green-800 hover:text-goldenrod m-2" icon={faEnvelope} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Person;
