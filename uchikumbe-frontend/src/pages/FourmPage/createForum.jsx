import React, { useState, useEffect } from "react";
import { userQuery } from "../../utils/data";
import { client } from "../../client";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUser } from "../../utils/fetchUser";
import { Typography } from "@material-tailwind/react";
import Spinner from "../../components/Spinner";

/**
 * The SubmiteForumRequestPage component represents the page for submitting a forum creation request.
 * Users can enter the desired forum name and a brief description to submit their request.
 * Upon submission, the request is saved to the database.
 *
 * @component
 * @category Pages
 */
function SubmiteForumRequestPage() {
  /**
   * State variable for storing the user details.
   * @type {object | null}
   */
  const [user, setUser] = useState(null);

  /**
   * State variable to get userId from params to be used to fetch the user from the userQuery.
   */
  const { userId } = useParams();

  /**
   * State variable for storing the title of a forum.
   * @type {string | null}
   */
  const [title, setTitle] = useState(null);

  /**
   * State variable for storing the description of a forum.
   * @type {string | null}
   */
  const [desc, setDesc] = useState(null);

  /**
   * Navigation function provided by the `react-router-dom` library.
   */
  const navigate = useNavigate();

  /**
   * This useEffect gets the `userId` from the `params` to be passed into the `userQuery` to get the user from the Sanity desk.
   * The data is then stored into the `user` state variable, and the user is changed with each new `userId` that comes from the params.
   *
   * @memberof SubmiteForumRequestPage
   * @function useEffect
   * @inner
   * @param {function} effect - The effect function to be executed.
   * @param {Array} deps - An array of dependencies to determine when the effect should re-run.
   * @returns {undefined}
   */
  useEffect(() => {
    const query = userQuery(userId);

    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, [userId]);

  /**
   * Submits the forum creation request by creating a new document in the database.
   * The request includes the provided title, description, and user ID.
   * Upon successful submission, the user is navigated to the forum page.
   *
   * @memberof SubmiteForumRequestPage
   * @function submitForumRequest
   * @returns {undefined}
   */
  const submitForumRequest = () => {
    if (title && desc) {
      const doc = {
        _type: "forumRequest",
        title,
        description: desc,
        userId: user._id,
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

  // Render a spinner while user data is being fetched
  if (!user) return <Spinner message="Hold on a sec..." />;

  // Render the SubmiteForumRequestPage component UI
  return (
    <div className=" flex mb-96  m-4 rounded-lg mx-auto flex-col align-middle items-center  bg-white p-4  max-w-screen-sm">
      <div className=" border-goldenrod border p-4 rounded-lg">
        <div className="">
          <div className=" flex flex-wrap gap-4">
            <FontAwesomeIcon
              icon={faUserEdit}
              className="text-goldenrod "
              size="2x"
            />
            <Typography variant="h4" className="text-goldenrod ">
              What Forum Do You Want To Create
            </Typography>
          </div>
          <Typography color="gray" className="mt-1 text-green-900 font-normal">
            Add forum information
          </Typography>
        </div>
        <div className="flex  flex-col gap-6 lg:pl-5 mt-5 w-screen-sm">
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
            className="bg-green-900 align-right mt-4 hover:bg-goldenrod transition-all duration-500 hover:scale-95 text-white  p-2 rounded-xl w-28 outline-none"
            onClick={submitForumRequest}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubmiteForumRequestPage;
