import React, { useState, useEffect } from "react";
import { userQuery } from "../../utils/data";
import { client } from "../../client";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router-dom";
import { Typography } from "@material-tailwind/react";

/**
 * Represents the CreateForumFromUserRequestPage component.
 * Renders a form to create a user forum request.
 * @class
 */
const CreateForumFromUserRequestPage = () => {
  /**
   * State variable for storing the user details.
   */
  const [user, setUser] = useState(null);

  /**
   * Retrieves the `userId` parameter from the URL.
   */
  const { userId } = useParams();

  /**
   * State variable for storing the forum title.
   */
  const [title, setTitle] = useState(null);

  /**
   * State variable for storing the forum description.
   */
  const [desc, setDesc] = useState(null);

  /**
   * Navigates to the forum page after submitting the forum request.
   */
  const navigate = useNavigate();

  /**
   * Fetches user data based on the `userId` parameter.
   */
  useEffect(() => {
    const query = userQuery(userId);

    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, [userId]);

  /**
   * Creates a new forum request and navigates to the forum page.
   */
  const submitForumRequest = () => {
    if (title && desc) {
      const doc = {
        _type: "forumRequest",
        title,
        description: desc,
        postedBy: {
          _type: "postedBy",
          _ref: user._id,
        },
      };
      client.create(doc).then(() => {
        navigate("/forum");
      });
    }
  };

  /**
   * Renders the CreateForumFromUserRequestPage component.
   */
  return (
    <div className="flex mb-96 m-4 rounded-lg mx-auto flex-col align-middle items-center bg-white p-4 max-w-screen-sm">
      <div className="border-goldenrod border p-4 rounded-lg">
        <div className="">
          <div className="flex flex-wrap gap-4">
            <FontAwesomeIcon
              icon={faUserEdit}
              className="text-goldenrod"
              size="2x"
            />
            <Typography variant="h4" className="text-goldenrod">
              Create user forum
            </Typography>
          </div>
          <Typography color="gray" className="mt-1 text-green-900 font-normal">
            Add forum information
          </Typography>
        </div>
        <div className="flex flex-col gap-6 lg:pl-5 mt-5 w-screen-sm">
          <input
            type="text"
            className="outline-none text-2xl sm:text-2xl placeholder-green-100 font-bold border-b-2 active:border-b-green-800 transition-all duration-500 hover:scale-95 border-green-200 p-2"
            placeholder="Forum Name"
            label="Forum Name"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            type="text"
            placeholder="Give a brief description of the forum"
            className="outline-none transition-all placeholder-green-100 active:border-b-green-800 duration-500 hover:scale-95 text-base sm:text-lg border-b-2 border-green-200 p-2"
            onChange={(e) => setDesc(e.target.value)}
          />
          <button
            type="button"
            className="bg-green-900 align-right mt-4 hover:bg-goldenrod transition-all duration-500 hover:scale-95 text-white p-2 rounded-xl w-28 outline-none"
            onClick={submitForumRequest}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateForumFromUserRequestPage;
