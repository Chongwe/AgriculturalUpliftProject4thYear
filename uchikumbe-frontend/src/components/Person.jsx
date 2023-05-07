import React from "@material-tailwind/react";
import avatar from "../assets/avatar.png";
import { Avatar } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";

function Person(props) {
  return (
    <div className="bg-white  rounded-lg p-2">
      <div className="flex items-center justify-between mb-2"></div>
      <div className="md:px-40 sm:ml-8 sm:px-8 ">
        <div className="flex items-center my-2 space-x-4 border-b border-grey-500">
          <Avatar
            src={props.avatar}
            variant="circular"
            size="lg"
            className="mb-1"
          />
          <div className="flex-1">
            <h4 className="text-lg font-medium text-uchiGreen">{props.name}</h4>
            {/* <p className="text-sm mb-1 text-goldenrod">{props.description}</p> */}
          </div>
          <div className=" flex items-center ml-auto">
            {/* <p className="text-goldenrod mr-2">{props.title}</p> */}
            <Link to="/message">
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
