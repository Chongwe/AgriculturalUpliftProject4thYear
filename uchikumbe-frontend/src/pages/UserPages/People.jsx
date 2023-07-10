import React from "@material-tailwind/react";
import Person from "../../components/Cards/Person";
import { useEffect, useState } from "react";
import { client } from "../../client";
import { userListQuery } from "../../utils/data";
import Spinner from "../../components/Spinner";
import SendSMS from "../../components/SendSMS";

/**
 * The People component represents a page that displays a list of users.
 * It fetches the user list from the server and renders each user as a Person card.
 *
 * @class
 */
function People(props) {
  const [listUser, setListUser] = useState(null); // State to store the list of users
  const [loading, setLoading] = useState(false); // State to track the loading state

  useEffect(() => {
    setLoading(true);

    // Fetch the user list from the server
    client.fetch(userListQuery).then((data) => {
      setListUser(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <Spinner message="Looking for users" />; // Display a spinner while loading

  if (!listUser?.length) return <h2>No users found</h2>; // Display a message if no users are found

  return (
    <div className="mt-8 sm:mx-4 min-w-screen-sm justify-center mx-auto align-middle">
      <h2 className="text-2xl justify-center ml-20 text-goldenrod">
        Members of uchikumbe
      </h2>

      {listUser.map((user) => (
        <Person
          key={user._id}
          name={user.userName}
          avatar={user.image}
          user_id={user._id}
        />
      ))}
    </div>
  );
}

export default People;
