import React, { useEffect, useState } from "react";
import {
  postDetailQuery,
  commentCountQuery,
  userQuery,
  postDetailQueryFromForum,
} from "../../utils/data";
import Spinner from "../../components/Spinner";
import { fetchUser } from "../../utils/fetchUser";
import { useNavigate, useParams } from "react-router-dom";
import { urlFor, client } from "../../client";
import UserContext from "../../Layout/UserContext";
import { v4 as uuidv4 } from "uuid";

const CommentPage = () => {
  const [user, setUser] = useState(null);
  const [comment, setComment] = useState(null);
  const [addingComment, setAddingComment] = useState(false);
  const userInfo = fetchUser();
  const [post, setPost] = useState(null);
  const { postId } = useParams();
  const { forumId } = useParams();
  const [commentCount, setCommentCount] = useState(0);

  // console.log(forumId);
  // console.log(postId);
  const fetchPostData = async () => {
    try {
      const query = postDetailQueryFromForum(forumId, postId);
      const postData = await client.fetch(query);
      setPost(postData.post[0]);

      // Fetch comment count using commentCountQuery
      // const commentCountQueryResult = await client.fetch(
      //   commentCountQuery(postId)
      // );
      // const count = commentCountQueryResult.commentCount || 0;
      // setCommentCount(count);
      console.log(post);

      return postData[0];
    } catch (error) {
      console.error("Error fetching post data:", error);
      return null;
    }
  };

  useEffect(() => {
    const query = userQuery(userInfo?.sub);

    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, []);

  // const addComment = () => {
  //   if (comment && user) {
  //     setAddingComment(true);
  //     client
  //       .patch(postId)
  //       .setIfMissing({ comments: [] })
  //       .insert("after", "comments[-1]", [
  //         {
  //           comment,
  //           _key: uuidv4(),
  //           type: "comment",
  //           postedBy: {
  //             _type: "postedBy",
  //             _ref: user._id,
  //           },
  //         },
  //       ])
  //       .commit()
  //       .then(() => {
  //         fetchPostData().then((postData) => {
  //           setComment("");
  //           setAddingComment(false);
  //           if (postData) {
  //             setPost(postData);
  //           }
  //         });
  //       });
  //   }
  // };

  const addComment = () => {
    if (comment && user) {
      setAddingComment(true);

      client
        .fetch(`*[_type == "subforum" && _id == $forumId][0]`, { forumId })
        .then((subforum) => {
          // console.log("Fetched subforum:", subforum);

          if (subforum) {
            const postIndex = subforum.post.findIndex(
              (post) => post._id === postId
            );
            // console.log("Post index:", postIndex);

            if (postIndex > -1) {
              const updatedPosts = [...subforum.post];
              const post = updatedPosts[postIndex];

              // Handle the case where comments array is initially null or undefined
              if (!post.comments) {
                post.comments = [];
              }

              post.comments.push({
                content: comment,
                _key: uuidv4(),
                postedBy: {
                  _type: "postedBy",
                  _ref: user._id,
                },
              });

              client
                .patch(subforum._id)
                .set({ post: updatedPosts })
                .commit()
                .then(() => {
                  fetchPostData().then((postData) => {
                    setComment("");
                    setAddingComment(false);
                    if (postData) {
                      setPost(postData);
                    }
                  });
                })
                .catch((error) => {
                  console.error("Error adding comment:", error);
                });
            } else {
              console.error("Post not found in subforum");
            }
          } else {
            console.error("Subforum not found");
          }
        })
        .catch((error) => {
          console.error("Error fetching subforum:", error);
        });
    }
  };

  useEffect(() => {
    fetchPostData();
  }, [postId]);

  if (!post) {
    return <Spinner message="Loading Post" />;
  }

  return (
    <UserContext.Provider value={user}>
      <div className="flex flex-col justify-center items-center h-full mt-5 lg:h-4/5">
        <div className="flex lg:flex-row flex-col justify-center rounded-lg bg-green-100 lg:p-5 p-3 lg:w-4/5 w-full">
          <div className=" p-3 flex-0.7 shadow-lg rounded-2xl w-full">
            <p className="pl-4 mb-2">Posted by:</p>
            <div className="flex flex-row pl-4">
              <img
                src={post?.postedBy?.image}
                alt="user-profile"
                className="w-10 h-10 rounded-full"
              />
              <h1 className="text-goldenrod ml-2 justify-normal text-2xl">
                {post.postedBy?.userName}
              </h1>
            </div>
            <img
              src={post?.image && urlFor(post.image).url()}
              className="flex rounded-t-xl rounded-b-xl w-full mt-2"
            />
          </div>

          <div className="flex flex-1 flex-col pl-2  gap-6 lg:pl-5 mt-5 w-full">
            <div className="rounded-xl bg-green-50 p-2">
              <h3 className="text-green-900 justify-normal text-2xl">
                {post.title}
              </h3>
              <p className=" duration-75 p-2 border-spacing-2">
                {post.content}
              </p>
            </div>

            <h1 className="text-goldenrod -mb-4 text-2xl">
              Comment ({post?.comments?.length})
            </h1>
            <hr className="mb-2 border-goldenrod" />
            <div className="max-h-370 overflow-y-auto ">
              {post?.comments?.map((comment, i) => (
                <div
                  key={i}
                  className="flex gap-2 mt-2 rounded-lg items-center"
                >
                  <img
                    src={comment?.postedBy?.image}
                    alt="user-profile"
                    className="w-7 h-7 rounded-full"
                  />
                  <div className="flex bg-green-50 rounded-xl mr-2 p-2 flex-col">
                    <p className="text-xs">{comment.postedBy.userName}</p>
                    <p className="font-bold">{comment.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 ">
              {user && (
                <img src={user.image} className="w-10 h-10 p-2 rounded-full" />
              )}
              <input
                className="flex-1 transition-all duration-500 hover:scale-95 border-2 p-2 focus:border-green-300 rounded-2xl border-green-100 outline-none"
                type="text"
                value={comment}
                placeholder="Type Comment"
                onChange={(e) => setComment(e.target.value)}
              />
              {user && (
                <button
                  type="button"
                  onClick={addComment}
                  className="bg-green-900 hover:bg-goldenrod text-sm transition-all duration-500 hover:scale-95 text-white  p-2 rounded-full w-28 outline-none"
                >
                  {addingComment ? "Commenting..." : " Comment"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default CommentPage;
