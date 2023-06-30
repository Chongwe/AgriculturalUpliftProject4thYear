import React from "@material-tailwind/react";
import avatar from "../../assets/GIcon.svg";
import { Avatar } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

function Group(props) {
  const { name, members, isUserMember, onJoin } = props;

  const handleJoin = () => {
    if (typeof onJoin === "function") {
      onJoin();
    }
  };

  return (
    <div className="bg-white min-w-screen-sm lg:w-[450px] rounded-lg p-2">
      <div className="  ">
        <div className="flex my-2 justify-between space-x-4 border-b border-grey-500">
          <div className="flex">
            <Avatar
              src={avatar}
              variant="rounded"
              className="mb-1 h-10 w-10 "
            />
            <div className="ml-4">
              <h4 className="text-lg font-medium text-uchiGreen">{name}</h4>
              <p className="text-sm mb-1 text-goldenrod">{members} Members</p>
            </div>
          </div>
          <div className="flex items-center ml-auto">
            {/* {!props.isUserMember && <Button color="green">Join</Button>} */}
            {!isUserMember ? (
              <button
                className=" bg-green-500  transition-all duration-200 hover:scale-95 hover:bg-goldenrod py-2 justify-center px-4 ml-4  text-white  rounded-full focus:outline-none "
                onClick={handleJoin}
              >
                Join
              </button>
            ) : (
              <p className="text-green-500">Joined</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Group;
