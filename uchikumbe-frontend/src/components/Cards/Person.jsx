import React from "react";
import { Avatar, IconButton } from "@material-tailwind/react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

/**
 * Represents a person component.
 *
 * @class
 * @param {Object} props - The component props.
 * @param {string} props.avatar - The URL of the person's avatar image.
 * @param {string} props.name - The name of the person.
 * @param {string} props.user_id - The unique ID of the person.
 * @returns {JSX.Element} The rendered person component.
 */
function Person(props) {
  return (
    <div className="bg-white transition-all lg:w-full min-w-screen-d pt-4 duration-200 hover:bg-green-100 mx-auto align-middle sm:p-4 rounded-lg p-2">
      <div className="flex items-center justify-between mb-2"></div>{" "}
      {/* Container for top section */}
      <div className="md:px-8 sm:ml-8 sm:px-8 hover:text">
        <div className="flex items-center space-x-4 border-b focus:border-green-300 border-green-100 outline-none">
          <img
            alt="user image"
            src={props.avatar}
            className="mb-1 rounded-full h-10 w-10"
          />{" "}
          {/* Render the user avatar */}
          <div className="flex-1">
            <h4 className="text-lg font-medium text-uchiGreen">{props.name}</h4>{" "}
            {/* Render the user name */}
          </div>
          <div className="flex items-center ml-auto">
            <Link to={`/message/${props.user_id}`}>
              <FontAwesomeIcon
                className="h-5 w-5 text-green-800 hover:text-goldenrod m-2"
                icon={faEnvelope}
              />{" "}
              {/* Render an envelope icon for messaging */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Person;
