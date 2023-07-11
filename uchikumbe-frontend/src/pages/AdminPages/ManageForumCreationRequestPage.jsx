import React, { useEffect, useState } from "react";
import ForumRequsetForum from "../../components/AdminComponents/ForumRequsetForum";
import { client } from "../../client";
import { submitForumRequestQuery } from "../../utils/data";
import { Spinner } from "@material-tailwind/react";

/**
 * The ManageForumCreationRequestPage component is responsible for managing and displaying forum creation requests.
 *
 * @component
 * @category Admin Pages
 */
const ManageForumCreationRequestPage = () => {
  /**
   * State variable for storing the forum creation requests.
   * @type {Array | null}
   */
  const [forumRequest, setForumRequest] = useState(null);

  /**
   * State variable for tracking the loading state.
   * @type {boolean}
   */
  const [loading, setLoading] = useState(true);

  /**
   * Fetches the forum creation requests and updates the state variables `forumRequest` and `loading`.
   *
   * @memberof CommentPage
   * @function
   * @inner
   * @name useEffect
   * @param {Array} dependencies - An array of dependencies that trigger the effect when changed.
   * @returns {undefined}
   */
  useEffect(() => {
    client.fetch(submitForumRequestQuery).then((data) => {
      setForumRequest(data);
      setLoading(false);
    });
  }, []);

  /**
   * Denies a forum creation request by setting the `isApproved` property to `false` for the specified forum ID.
   *
   * @function
   * @param {string} forumId - The ID of the forum creation request to deny.
   */
  const handleDeny = (forumId) => {
    try {
      const forumToApprove = forumRequest.find(
        (forum) => forum._id === forumId
      );

      client.patch(forumToApprove._id).set({ isApproved: false }).commit();
    } catch (error) {
      console.error("Error denying forum request:", error);
    }
  };

  /**
   * Approves a forum creation request by updating the `isApproved` property of the forum, creating a new subforum document,
   * and handling any errors that occur.
   *
   * @function
   * @param {string} forumId - The ID of the forum creation request to approve.
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

  /**
   * Renders a loading spinner while the data is being fetched.
   */
  if (loading) return <Spinner />;

  /**
   * Filters the forum creation requests based on their approval status.
   */
  const approvedRequests = forumRequest.filter(
    (forum) => forum.isApproved === true
  );
  const pendingRequests = forumRequest.filter(
    (forum) => forum.isApproved === null
  );
  const deniedRequests = forumRequest.filter(
    (forum) => forum.isApproved === false
  );

  /**
   * Renders the ManageForumCreationRequestPage component UI.
   */
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
