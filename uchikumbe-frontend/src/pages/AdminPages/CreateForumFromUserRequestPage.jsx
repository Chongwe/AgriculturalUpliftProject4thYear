import React, { useState, useEffect } from "react";
import { userQuery } from "../../utils/data";
import { client } from "../../client";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router-dom";
import { Typography } from "@material-tailwind/react";

const CreateForumFromUserRequestPage = () => {
  /* `const [user, setUser] = useState(null);` is declaring a state variable called `user` and a
  function to update its value called `setUser`. The initial value of `user` is set to `null`. This
  is a common pattern in React to manage state in functional components. */
  const [user, setUser] = useState(null);

  /* `const { userId } = useParams();` is using the `useParams` hook from React Router to extract the
  value of the `userId` parameter from the current URL. It allows the component to access the
  `userId` value that is passed as a parameter in the URL. */
  const { userId } = useParams();

  /* `const [title, setTitle] = useState(null);` is declaring a state variable called `title` and a
  function to update its value called `setTitle`. The initial value of `title` is set to `null`.
  This is a common pattern in React to manage state in functional components. In this case, `title`
  is used to store the value of the forum name input field. Whenever the value of the input field
  changes, the `setTitle` function is called to update the value of `title`. */
  const [title, setTitle] = useState(null);

  /* `const [desc, setDesc] = useState(null);` is declaring a state variable called `desc` and a
  function to update its value called `setDesc`. The initial value of `desc` is set to `null`. This
  is a common pattern in React to manage state in functional components. In this case, `desc` is
  used to store the value of the forum description input field. Whenever the value of the input
  field changes, the `setDesc` function is called to update the value of `desc`. */
  const [desc, setDesc] = useState(null);

  /* `const navigate = useNavigate();` is using the `useNavigate` hook from React Router to get a
  function that can be used to navigate to different pages within the application. The `navigate`
  function can be called with a path as an argument to navigate to that specific page. In this case,
  it is used to navigate to the "/forum" page after the forum request is successfully submitted. */
  const navigate = useNavigate();

  /* The `useEffect` hook is used to perform side effects in a functional component. In this case, it
  is used to fetch user data from the server and update the `user` state variable. */
  useEffect(() => {
    const query = userQuery(userId);

    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, [userId]);

  /**
   * The function `submitForumRequest` creates a new forum request and navigates to the forum page if
   * the title and description are provided.
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
              Create user forum
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
};

export default CreateForumFromUserRequestPage;
