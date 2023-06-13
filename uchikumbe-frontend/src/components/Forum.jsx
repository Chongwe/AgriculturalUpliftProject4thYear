import React, { useState, useEffect } from "react";
import Group from "./Group";
import { fetchUser } from "../utils/fetchUser";
import {
  forumQuery,
  userCreatedForums,
  userCreatedForumsQuery,
  userQuery,
} from "../utils/data";
import { client } from "../client";
import JoinedGroups from "./JoinedGroups";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const Forum = () => {
  const [user, setUser] = useState(null);
  const [createdForums, setCreatedForums] = useState(null);
  const [forums, setForums] = useState(null);
  const [loading, setLoading] = useState(false);

  const userInfo = fetchUser();

  useEffect(() => {
    const query = userQuery(userInfo?.sub);

    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  });

  useEffect(() => {
    const createdForumsQuery = userCreatedForumsQuery(userInfo?.sub);

    client.fetch(createdForumsQuery).then((data) => {
      setCreatedForums(data);
    });
  });

  useEffect(() => {
    setLoading(true);
    client.fetch(forumQuery).then((data) => {
      setForums(data);
      setLoading(false);
    });
  }, []);
  if (loading) return <Spinner message="Looking for Forums" />;

  return (
    <div className=" h-screen ">
      {user !== null && user !== undefined && (
        <div className="m-4 text-center ">
          <Link to={`/create-forum/${user?._id}`}>
            <button class=" bg-green-500  transition-all duration-200 hover:scale-95 hover:bg-goldenrod py-2 justify-center px-4 ml-4  text-white  rounded-full focus:outline-none">
              Create a Forum
            </button>
            <hr className="my-4 border-goldenrod" />
          </Link>
        </div>
      )}

      <div className="p-4 lg:flex-row  justify-center gap-24 lg:flex flex-col mx-12 ">
        {user !== null && user !== undefined && (
          <div className="  max-w-[500px] w-[600px] items-center p-4 bg-green-50 rounded-xl ">
            <h1 className="text-4xl mb-4  text-green-900">Your Forums</h1>
            <hr className="my-4 border-green-500 border-1" />
            {createdForums?.map((forum) => (
              <Link to={`/forum-page/${forum._id}`}>
                <JoinedGroups name={forum.title} members=" Members" />
              </Link>
            ))}
          </div>
        )}
        <div className="p-4">
          <h1 className="text-4xl mb-4  text-green-900">Forums</h1>
          <hr className="my-4 border-green-500 border-1" />
          <div className="  max-w-[500px] rounded-xl">
            {forums?.map((forum) => (
              <Link to={`/forum-page/${forum._id}`}>
                <Group name={forum.title} members="70 Member" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;
