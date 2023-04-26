import React from "react";
import {
  CardHeader,
  Section,
  Card,
  CardBody,
  H5,
  LeadText,
  Icon,
  IconButton,
} from "@material-tailwind/react";
import { Avatar } from "@material-tailwind/react";
import avatar from "../assets/avatar.png";
import {
  faComment,
  faUser,
  faEnvelope,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function People() {
  return (
    <Card className="p-4">
      <div>
        <h1 className="text-3xl font-large text-green-900 pr-10">Members</h1>
        <div className=" w-50 h-1/2 ">
          <div className="bg-white overflow-hidden shadow rounded-lg ">
            <div className="sm:p-6 w-full border-0 bg-white shadow-md rounded-md p-4 border-t border-b ">
              <div className="flex items-center space-x-2">
                <Avatar src={avatar} size="sm" />
                <span className="text-lg leading-6 font-medium text-gray-900">
                  Jimmy Maloya {}
                </span>
              </div>
              <div className=" flex justify-end p-1/2">
                <IconButton variant="text" color="green" size="sm">
                  <FontAwesomeIcon icon={faEnvelope} />
                </IconButton>
              </div>
            </div>

            <div className="sm:p-6 w-full border-0 bg-white shadow-md rounded-md p-4 border-t border-b ">
              <div className="flex items-center space-x-2">
                <Avatar src={avatar} size="sm" />
                <span className="text-lg leading-6 font-medium text-gray-900">
                  Jimmy Maloya {}
                </span>
              </div>
              <div className=" flex justify-end p-1/2">
                <IconButton variant="text" color="green" size="sm">
                  <FontAwesomeIcon icon={faEnvelope} />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default People;
