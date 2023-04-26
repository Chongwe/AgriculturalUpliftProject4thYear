import React from "@material-tailwind/react";
import avatar from "../assets/avatar.png";
import { Avatar } from "@material-tailwind/react";
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
import {
  faComment,
  faUser,
  faEnvelope,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function People() {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-sans font-semibold text-green-900 space-y-4 px-40">Admins</h3>
       </div>
       <div className="space-y-4 px-40 ">
        <div className="flex items-center space-x-4 border-t border-b">
          <Avatar src={avatar} size="sm" />
          <div className="flex-1">
            <h4 className="text-sm font-medium text-gray-900">Jimmy Maloya</h4>
            <p className="text-sm text-gray-500">Pig farmer in Mulanje</p>
          </div>
          <div className="ml-auto">
            <IconButton variant="text" color="green" size="xl">
              <FontAwesomeIcon icon={faEnvelope} />
            </IconButton>
          </div>
        </div>

        <div className="flex items-center space-x-4 border-t border-b">
          <Avatar src={avatar} size="sm" />
          <div className="flex-1">
            <h4 className="text-sm font-medium text-gray-900">
              Dalitso Chongwe
            </h4>
            <p className="text-sm text-gray-500">Bee farmer in Salima</p>
          </div>
          <div className="ml-auto">
            <IconButton variant="text" color="green" size="xl">
              <FontAwesomeIcon icon={faEnvelope} />
            </IconButton>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-2 pt-5">
        <h3 className="text-lg font-sans font-semibold text-green-900 space-y-4 px-40">Members</h3>
       </div>
       <div className="space-y-4 px-40 ">
        <div className="flex items-center space-x-4 border-t border-b">
          <Avatar src={avatar} size="sm" />
          <div className="flex-1">
            <h4 className="text-sm font-medium text-gray-900">Emma Limbe</h4>
            <p className="text-sm text-gray-500">Sugarcane famer in Bangwe</p>
          </div>
          <div className="ml-auto">
            <IconButton variant="text" color="green" size="xl">
              <FontAwesomeIcon icon={faEnvelope} />
            </IconButton>
          </div>
        </div>

        <div className="flex items-center space-x-4 border-t border-b">
          <Avatar src={avatar} size="sm" />
          <div className="flex-1">
            <h4 className="text-sm font-medium text-gray-900">
              Howard Kaila
            </h4>
            <p className="text-sm text-gray-500">Chicken farmer in Zomba</p>
          </div>
          <div className="ml-auto">
            <IconButton variant="text" color="green" size="xl">
              <FontAwesomeIcon icon={faEnvelope} />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default People;
