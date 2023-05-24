import React from "@material-tailwind/react";
import Person from "./Person";
import { useEffect, useState } from "react";
import { client } from "../client";
import { userListQuery } from "../utils/data";
import Spinner from "./Spinner";

function People() {
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
    <div className="mt-8 h-screen min-w-[400px]">
      {listUser?.map((user) => (
        <Person name={user.userName} avatar={user.image} />
      ))}
    </div>
  );
}

export default People;
