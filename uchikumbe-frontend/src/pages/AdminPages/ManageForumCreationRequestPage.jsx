import React, { useEffect, useState } from "react";
import ForumRequsetForum from "../../components/AdminComponents/ForumRequsetForum";
import { client } from "../../client";
import { submitForumRequestQuery } from "../../utils/data";
import { Spinner } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const ManageForumCreationRequestPage = () => {
  const [forumRequest, setForumRequest] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    client.fetch(submitForumRequestQuery).then((data) => {
      setForumRequest(data);
      setLoading(false);
    }, []);
  });

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
              postedBy: {
                _type: "postedBy",
                _ref: forumToApprove.postedBy._id,
              },
            };

            client.create(doc).then(() => {
              navigate("/forum");
            });
          })
          .catch((error) => {
            console.error("Error approving forum request:", error);
          });
      }
    } catch (error) {
      console.error("Error approving forum request:", error);
    }
  };

  if (loading) return <Spinner />;

  const approvedRequests = forumRequest.filter(
    (forum) => forum.isApproved === true
  );
  const pendingRequests = forumRequest.filter(
    (forum) => forum.isApproved === null
  );
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
        />
      ))}

      <h2>Approved Requests</h2>
      {approvedRequests.map((forum) => (
        <ForumRequsetForum
          key={forum._id}
          name={forum.title}
          username={forum.postedBy.userName}
          description={forum.description}
        />
      ))}

      <h2>Denied Requests</h2>
      {deniedRequests.map((forum) => (
        <ForumRequsetForum
          key={forum._id}
          name={forum.title}
          username={forum.postedBy.userName}
          description={forum.description}
        />
      ))}
    </div>
  );
};

export default ManageForumCreationRequestPage;
