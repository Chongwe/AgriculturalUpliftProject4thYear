import React from "@material-tailwind/react";
import Person from "./Person";
import { useEffect, useState } from "react";
import { client } from "../client";
import { userListQuery } from "../utils/data";
import Spinner from "./Spinner";
import SendSMS from "./SendSMS";

function People( props) {
  const [listUser, setListUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    client.fetch(userListQuery).then((data) => {
      setListUser(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <Spinner message="Looking for users" />;

  if (!listUser?.length) return <h2>No users found</h2>;

  return (
    <div className="mt-8 sm:mx-4 min-w-screen-sm justify-center mx-auto align-middle">
      <h2 className="text-2xl justify-center ml-20 text-goldenrod" >Members of uchikumbe</h2>

      {listUser.map((user) => (
        <Person
          key={user._id}
          name={user.userName}
          avatar={user.image}
          user_id={user._id}
          notificationCount={props.notificationCount}
          
          
       
        />
      ))}
    </div>
  );
}

export default People;
