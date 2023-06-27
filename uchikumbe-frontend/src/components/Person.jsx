import React from "@material-tailwind/react";
import avatar from "../assets/avata.jpg";
import { Avatar } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";

function Person(props) {
  return (
    <div className="bg-white transition-all duration-200 hover:scale-95 mx-4 rounded-lg p-2">
      <div className="flex items-center justify-between mb-2"></div>
      <div className="md:px-40 sm:ml-8 sm:px-8 ">
        <div className="flex items-center my-2 space-x-4 border-b border-grey-500">
          <Avatar
            variant="circular"
            src={props.avatar}
            className="mb-1 h-10 w-10"
          />
          <div className="flex-1">
            <h4 className="text-lg font-medium text-uchiGreen">{props.name}</h4>
          </div>
          <div className=" flex items-center ml-auto">
            <Link to={`/message/${props.user_id}`}>
              <IconButton variant="text" color="green" size="xl" className="">
                <FontAwesomeIcon size="2x" icon={faEnvelope} />
              </IconButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Person;
