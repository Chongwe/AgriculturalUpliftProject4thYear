import React from "@material-tailwind/react";
import avatar from "../../assets/GIcon.svg";
import { Avatar } from "@material-tailwind/react";

/**
 * Represents a joined groups component.
 *
 * @class
 * @param {Object} props - The component props.
 * @param {string} props.name - The name of the group.
 * @param {number} props.members - The number of members in the group.
 * @returns {JSX.Element} The rendered joined groups component.
 */
function JoinedGroups(props) {
  return (
    <div className="bg-transparent min-w-screen-sm lg:w-[450px] rounded-lg p-2">
      <div className="  ">
        <div className="flex items-center  my-2 space-x-4 border-b border-green-200">
          <Avatar
            src={avatar}
            variant="rounded"
            className="mb-1 h-10 w-10 mr-2"
          />
          <div className="flex-1">
            <h4 className="text-lg font-medium text-uchiGreen">{props.name}</h4>
            <p className="text-sm mb-1 text-goldenrod">
              {props.members} members
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinedGroups;
