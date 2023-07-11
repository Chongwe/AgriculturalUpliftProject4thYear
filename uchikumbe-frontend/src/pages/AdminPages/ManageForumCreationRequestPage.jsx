import React, { useEffect, useState } from "react";
import ForumRequsetForum from "../../components/AdminComponents/ForumRequsetForum";
import { client } from "../../client";
import { submitForumRequestQuery } from "../../utils/data";
import { Spinner } from "@material-tailwind/react";

/** The code is defining a functional component called `ManageForumCreationRequestPage`. This component
is responsible for managing and displaying forum creation requests. 
* @class
*/
const ManageForumCreationRequestPage = () => {
  /** The code `const [forumRequest, setForumRequest] = useState(null);` is declaring a state variable
  called `forumRequest` and a corresponding setter function called `setForumRequest`. The initial
  value of `forumRequest` is set to `null`. */
  const [forumRequest, setForumRequest] = useState(null);
  /**  The line `const [loading, setLoading] = useState(true);` is declaring a state variable called
  `loading` and a corresponding setter function called `setLoading`. The initial value of `loading`
  is set to `true`. This variable is used to keep track of whether the data is still being loaded or
  not. */
  const [loading, setLoading] = useState(true);

  /** The `useEffect` hook is used to perform side effects in a functional component. In this case, it
  is fetching data from the server using the `client.fetch` method and updating the state variables
  `forumRequest` and `loading` accordingly. */
  useEffect(() => {
    client.fetch(submitForumRequestQuery).then((data) => {
      setForumRequest(data);
      setLoading(false);
    }, []);
  });

  /**
   * The function `handleDeny` is used to deny a forum request by setting the `isApproved` property to
   * `false` for the specified forum ID.
   *   @param {string} forumId - The ID of the forum creation request to approve.
   * @returns {void}
   */
  const handleDeny = (forumId) => {
    try {
      const forumToApprove = forumRequest.find(
        (forum) => forum._id === forumId
      );

      client.patch(forumToApprove._id).set({ isApproved: false }).commit();
    } catch (error) {
      console.error("Error approving forum request:", error);
    }
  };

  /**
   * The `handleApprove` function approves a forum request by updating the `isApproved` property of the
   * forum, creating a new subforum document, and handling any errors that occur.
   *  @param {string} forumId - The ID of the forum creation request to approve.
   * @returns {void}
   */
  const handleApprove = (forumId) => {
    try {
      const forumToApprove = forumRequest.find(
        (forum) => forum._id === forumId
      );

      if (forumToApprove) {
        forumToApprove.isApproved = true;

        client
          .patch(forumToApprove._id)
          .set({ isApproved: true })
          .commit()
          .then(() => {
            const doc = {
              _type: "subforum",
              title: forumToApprove.title,
              description: forumToApprove.description,
              userId: forumToApprove.userId,
            };

            client.create(doc);
          })
          .catch((error) => {
            console.error("Error approving forum request:", error);
          });
      }
    } catch (error) {
      console.error("Error approving forum request:", error);
    }
  };

  /* The line `if (loading) return <Spinner />;` is checking if the `loading` variable is `true`. If it
  is, it returns a `<Spinner />` component, which is typically used to indicate that the data is
  still being loaded. This is a common pattern used in React to handle asynchronous data fetching. */
  if (loading) return <Spinner />;

  /* The code `const approvedRequests = forumRequest.filter((forum) => forum.isApproved === true);` is
  filtering the `forumRequest` array to create a new array called `approvedRequests`. It includes
  only the elements from `forumRequest` where the `isApproved` property is `true`. This means that
  `approvedRequests` will contain all the forum requests that have been approved. */
  const approvedRequests = forumRequest.filter(
    (forum) => forum.isApproved === true
  );

  /* The code `const pendingRequests = forumRequest.filter((forum) => forum.isApproved === null);` is
  filtering the `forumRequest` array to create a new array called `pendingRequests`. It includes
  only the elements from `forumRequest` where the `isApproved` property is `null`. This means that
  `pendingRequests` will contain all the forum requests that are still pending approval. */
  const pendingRequests = forumRequest.filter(
    (forum) => forum.isApproved === null
  );

  /* The code `const deniedRequests = forumRequest.filter((forum) => forum.isApproved === false);` is
  filtering the `forumRequest` array to create a new array called `deniedRequests`. It includes only
  the elements from `forumRequest` where the `isApproved` property is `false`. This means that
  `deniedRequests` will contain all the forum requests that have been denied. */
  const deniedRequests = forumRequest.filter(
    (forum) => forum.isApproved === false
  );

  return (
    <div className="mt-4">
      <h2>Pending Requests</h2>
      {pendingRequests.map((forum) => (
        <ForumRequsetForum
          key={forum._id}
          name={forum.title}
          username={forum.postedBy.userName}
          description={forum.description}
          handleApprove={() => handleApprove(forum._id)}
          handleDeny={() => handleDeny(forum._id)}
          isApproved={forum.isApproved}
        />
      ))}

      <h2>Approved Requests</h2>
      {approvedRequests.map((forum) => (
        <ForumRequsetForum
          key={forum._id}
          name={forum.title}
          username={forum.postedBy.userName}
          description={forum.description}
          isApproved={forum.isApproved}
        />
      ))}

      <h2>Denied Requests</h2>
      {deniedRequests.map((forum) => (
        <ForumRequsetForum
          key={forum._id}
          name={forum.title}
          username={forum.postedBy.userName}
          description={forum.description}
          isApproved={forum.isApproved}
        />
      ))}
    </div>
  );
};

export default ManageForumCreationRequestPage;
