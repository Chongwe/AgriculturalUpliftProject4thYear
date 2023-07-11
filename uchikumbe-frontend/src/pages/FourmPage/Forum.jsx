import React, { useState, useEffect } from "react";
import Group from "../../components/Cards/groupCard";
import { fetchUser } from "../../utils/fetchUser";
import {
  forumQuery,
  userCreatedForumsQuery,
  userQuery,
} from "../../utils/data";
import { client } from "../../client";
import JoinedGroups from "../../components/Cards/JoinedOrCreatedGroupCard";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner";

/**
 * The Forum component represents the forum page.
 * Renders the forums created by the user and available forums to join.
 *
 * @class
 */
const Forum = () => {
  /**
   * State variable for storing the user details.
   */
  const [user, setUser] = useState(null);

  /**
   * State variable for storing the forums created by the user.
   */
  const [createdForums, setCreatedForums] = useState(null);

  /**
   * State variable for storing the available forums.
   */
  const [forums, setForums] = useState(null);

  /**
   * State variable for tracking the loading state.
   */
  const [loading, setLoading] = useState(false);

  const userInfo = fetchUser();

  /**
   * Fetches the user data based on the user ID.
   * Updates the `user` state variable with the fetched data.
   */
  useEffect(() => {
    const query = userQuery(userInfo?.sub);

    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  });

  /**
   * Fetches the forums created by the user.
   * Updates the `createdForums` state variable with the fetched data.
   */
  useEffect(() => {
    const createdForumsQuery = userCreatedForumsQuery(userInfo?.sub);

    client.fetch(createdForumsQuery).then((data) => {
      setCreatedForums(data);
    });
  });

  /**
   * Fetches the available forums.
   * Updates the `forums` state variable with the fetched data.
   * Sets the `loading` state variable while fetching.
   */
  useEffect(() => {
    setLoading(true);
    client.fetch(forumQuery).then((data) => {
      setForums(data);
      setLoading(false);
    });
  }, []);

  /**
   * Joins a forum by updating the `memberOf` array with the user's details.
   * Reloads the page after joining the forum.
   *
   * @param {string} forumId - The ID of the forum to join.
   */
  const joinForum = (forumId) => {
    const doc = {
      _type: "memberOf",
      _key: user._id,
      postedBy: {
        _type: "postedByBy",
        _ref: user._id,
      },
      userId: user._id,
    };

    client
      .patch(forumId)
      .setIfMissing({ memberOf: [] })
      .insert("after", "memberOf[-1]", [doc])
      .commit()
      .then(() => {
        window.location.reload();
      });
  };

  /**
   * Renders a loading spinner while the forums are being fetched.
   */
  if (loading) return <Spinner message="Looking for Forums" />;

  /**
   * Renders the forum page.
   */
  return (
    <div className=" min-w-screen-sm">
      {user !== null && user !== undefined && (
        <div className="m-4 text-center ">
          <Link to={`/create-forum/${user?._id}`}>
            <button className=" bg-green-500  transition-all duration-200 hover:scale-95 hover:bg-goldenrod py-2 justify-center px-4 ml-4  text-white  rounded-full focus:outline-none">
              Want To Create A Forum?
            </button>
            <hr className="my-4 border-goldenrod" />
          </Link>
        </div>
      )}

      <div className="p-4 lg:flex-row  justify-center  gap-24 lg:flex flex-col  ">
        {user !== null && user !== undefined && (
          <div className="  items-center p-4 bg-green-50 rounded-xl ">
            <h1 className="text-4xl mb-4  text-green-900">Your Forums</h1>
            <hr className="my-4 border-green-500 border-1" />
            {createdForums?.map((forum) => (
              <div key={forum._id}>
                <JoinedGroups
                  name={
                    <Link
                      to={`/forum-page/${forum._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      {forum.title}
                    </Link>
                  }
                  members={forum.memberOf?.length}
                />
              </div>
            ))}
          </div>
        )}
        <div className="p-4 ">
          <h1 className="text-4xl mb-4  text-green-900">Forums</h1>
          <hr className="my-4 border-green-500 border-1" />
          <div className="   rounded-xl">
            {forums?.map((forum) => (
              <Group
                key={forum._id}
                name={
                  <Link
                    to={`/forum-page/${forum._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {forum.title}
                  </Link>
                }
                members={forum.memberOf?.length}
                isUserMember={forum.memberOf?.some(
                  (member) => member.userId === user?._id
                )}
                onJoin={() => joinForum(forum._id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;
