import React, { useState, useEffect } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { useParams, useNavigate } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";
import {
  faBars,
  faHistory,
  faMessage,
  faNoteSticky,
  faPlusCircle,
  faUserEdit,
} from "@fortawesome/free-solid-svg-icons";

import { userQuery } from "../utils/data";
import { client } from "../client";
import Spinner from "./Spinner";
import ProfileCard from "./profileCard";
import { Tooltip } from "@material-tailwind/react";

const randomImage = "https://source.unsplash.com/800x600/?farm,farm-animals";
const activeBtnStyles =
  "bg-red-500 text-white font-bold p-2 rounded-full w-20 outline-none";
const notActiveBtnStyles =
  "bg-primary mr-4 text-black font-bold p-2 rounded-full w-20 outline-none";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { userId } = useParams();

  console.log(userId);

  useEffect(() => {
    const query = userQuery(userId);

    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, [userId]);

  //   console.log(user.userName);

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  if (!user) {
    return <Spinner message="Loading Profile" />;
  }
  return (
    <div className="relative pb-2 pt-2 h-full justify-center items-center">
      <div className="flex flex-col pb-5">
        <div className="relative flex flex-col mb-7">
          <div className="flex flex-col justify-center items-center">
            <img
              src={randomImage}
              className="w-full h-200 2xl:h-510 shadow-lg object-cover"
              alt="banner-pic"
            />
            <img
              className="rounded-full w-20 h-20 -mt-10 shadow-xl object-cover"
              src={user.image}
              alt=""
            />
            <h1 className="font-bold text-3xl text-green-900 text-center mt-3 ">
              {user.userName}
            </h1>
            <div className="absolute top-0 z-1 right-0 p-5">
              {userId === user._id && (
                <Tooltip content="Log Out" className="rounded-full" placement="bottom">
                  <button
                    className="bg-white p-2 rounded-full cursor-pointer outline-none shadow-md"
                    onClick={() => {
                      googleLogout();
                      logout();
                    }}
                  >
                    <AiOutlineLogout color="red" fontSize={21} />
                  </button>
                </Tooltip>
              )}
            </div>
          </div>
          <div className="flex flex-wrap relative parent justify-center gap-4">
            <ProfileCard
              name="Edit Profile"
              link="edit-profile"
              icon={faUserEdit}
            />
            <ProfileCard name="Add Farm" link="add-farm" icon={faPlusCircle} />
            <ProfileCard name="Messages" link="messages" icon={faMessage} />
            <ProfileCard name="Posts" link="posts" icon={faNoteSticky} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
