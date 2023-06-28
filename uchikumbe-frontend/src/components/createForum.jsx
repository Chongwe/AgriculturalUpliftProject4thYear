import React, { useState, useEffect } from "react";
import { userQuery } from "../utils/data";
import { client } from "../client";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { fetchUser } from "../utils/fetchUser";
import {
  Input,
  Button,
  Typography,
  Textarea,

} from "@material-tailwind/react";

function CreateForum() {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const userInfo = fetchUser();

  const navigate = useNavigate();

  useEffect(() => {
    const query = userQuery(userId);

    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, [userId]);

  // console.log(user._id);

  const saveForum = () => {
    if (title && desc) {
      const doc = {
        _type: "subforum",
        title,
        description: desc,
        userId: user._id,
      };
      client.create(doc).then(() => {
        navigate("/forum");
      });
    }
  };

  

  return (
    <div className=" p-4 lg:flex-row shadow-lg rounded-3xl my-4 min-w-screen-sm justify-center gap-24 lg:flex flex-col  mx-12 items-center">
      <div className="">
        
        <div className=" flex flex-wrap gap-4">
          <FontAwesomeIcon
            icon={faUserEdit}
            className="text-goldenrod "
            size="2x"
          />
          <Typography variant="h4" className="text-goldenrod ">
            Create a Forum
          </Typography>
        </div>
        <Typography color="gray" className="mt-1 text-green-900 font-normal">
          Add forum information
        </Typography>
      </div>
      <form className="mt-8 mb-2 h-auto max-w-screen-lg min-w-screen-sm sm:w-96 lg:flex-row lg:flex flex-col gap-6">
        <div className="mb-4 flex flex-col ">
          <input
            type="text"
            className="outline-none text-2xl sm:text-2xl placeholder-green-100 font-bold border-b-2 active:border-b-green-800 transition-all duration-500 hover:scale-95 border-green-200 p-2"
            placeholder="Forum Name"
            label="Forum Name"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4 flex flex-col ">
          <textarea
            type="text"
            placeholder="Forum description"
            className="outline-none transition-all placeholder-green-100 active:border-b-green-800 duration-500 hover:scale-95 text-base sm:text-lg border-b-2 border-green-200 p-2"
            onChange={(e) => setDesc(e.target.value)}
          />
          <button
            type="button"
            className="bg-green-900 w-full mt-4 hover:bg-goldenrod transition-all duration-500 hover:scale-95 text-white  p-2 rounded-xl  outline-none"
            onClick={saveForum}
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateForum;
