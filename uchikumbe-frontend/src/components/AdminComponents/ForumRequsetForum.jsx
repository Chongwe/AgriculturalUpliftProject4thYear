import React, { useState } from "react";
import {
  Avatar,
  Collapse,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { faEnvelope, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { client } from "../../client";
import { useNavigate, useParams } from "react-router-dom";

const ForumRequsetForum = (props) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const toggleOpen = () => {
    setOpen(!open);
  };

  const { name, username, description, handleApprove, handleDeny, isApproved } =
    props;

  return (
    <div className="bg-white transition-all lg:w-full mt-2 min-w-screen-d pt-4 duration-200 mx-auto align-middle sm:p-4 rounded-lg p-2">
      <div className="flex items-center justify-between mb-2"></div>
      <div className="md:px-8 sm:ml-8 sm:px-8 hover:text">
        <div className="flex items-center space-x-4 border-b focus:border-green-300 border-green-100 outline-none">
          <div className="flex-1">
            <h4 className="text-lg font-medium text-uchiGreen">{name}</h4>
          </div>
          <div className="flex items-center ml-auto">
            <span
              className="h-5 w-5 text-green-800 m-2 cursor-pointer"
              onClick={toggleOpen}
            >
              <FontAwesomeIcon icon={faEye} />
            </span>
          </div>
        </div>
        <Collapse open={open}>
          <CardBody>
            <Typography>{username}</Typography>
            <Typography className="mt-4">{description}</Typography>
            {isApproved === null && (
              <>
                <button
                  onClick={handleApprove}
                  className="px-4 py-2 mt-7 mr-2 bg-green-500 text-white rounded-md"
                >
                  Approve
                </button>
                <button
                  onClick={handleDeny}
                  className="px-4 py-2 bg-red-500 text-white rounded-md"
                >
                  Deny
                </button>
              </>
            )}
          </CardBody>
        </Collapse>
      </div>
    </div>
  );
};

export default ForumRequsetForum;
