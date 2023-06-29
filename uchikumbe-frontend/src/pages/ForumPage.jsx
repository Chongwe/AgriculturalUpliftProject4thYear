import { useEffect, useState } from "react";
import Posts from "../components/Posts";
import "../styles.css";
import { useParams } from "react-router-dom";
import { forumDetailsQuery } from "../utils/data";
import { fetchUser } from "../utils/fetchUser";
import { Link } from "react-router-dom";
import { client } from "../client";
import Spinner from "../components/Spinner";
import { userQuery } from "../utils/data";
import Sidebar from "../components/Sidebar";

const ForumPage = () => {
  const [forum, setForum] = useState(null);
  const { forumId } = useParams();

  const [user, setUser] = useState(null);

  const userInfo = fetchUser();

  useEffect(() => {
    const query = userQuery(userInfo?.sub);

    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  });

  useEffect(() => {
    const query = forumDetailsQuery(forumId);

    client.fetch(query).then((data) => {
      setForum(data[0]);
    });
  }, [forumId]);

  const isMember =
    user &&
    forum &&
    forum.memberOf?.some((member) => member.userId === user._id);

  const joinForum = () => {
    const doc = {
      _type: "memberOf",
      _key: user?._id,
      postedBy: {
        _type: "postedByBy",
        _ref: user?._id,
      },
      userId: user?._id,
    };

    client
      .patch(forumId)
      .setIfMissing({ memberOf: [] })
      .insert("after", "memberOf[-1]", [doc])
      .commit()
      .then(() => {
        window.location.reload();
      });
  };

  if (!forum) {
    return <Spinner message="Loading Forum" />;
  }
  return (
    <div>
    <div className="pt-4 mt-2 bg-green-200  rounded-2xl  min-w-screen-sm flex-col">
      <div className="flex p-2 w-full justify-between space-x-4 ">
        <div className=" ">
          <h1 className="text-3xl text-green-900 font-bold mb-4">
            {forum.title}
          </h1>
          <h1 className=" text-goldenrod -mt-4 ">{forum.description}</h1>
        </div>
        <div className=" gap-2 ">
          {user !== null && user !== undefined && isMember && (
            <Link to={`/create-post/${forum?._id}`}>
              <button className=" bg-green-500 m-2 hover:bg-goldenrod transition-all duration-100 hover:scale-95 py-2  px-4 ml-4  text-white  rounded-md focus:outline-none">
                Create a Post
              </button>
            </Link>
          )}

          {!isMember && (
            <button
              onClick={joinForum}
              className=" bg-green-500 m-2 hover:bg-goldenrod transition-all duration-100 hover:scale-95 py-2  px-4 ml-4  text-white  rounded-md focus:outline-none"
            >
              Join
            </button>
          )}
        </div>
      </div>
  </div>
      <div className=" mt-4 ">
      <div className="lg:w-full w-full pt-4 bg-green-100 justify-center rounded-none sm:rounded-2xl min-w-screen-sm flex">
       
        <div className="flex-col  lg:-ml-56  mt-8 mb-2 lg:px-20 flex rounded-xl bg-transparent sm:bg-green-50">
          <h2 className="text-3xl font-bold text-green-500 m-2">Posts in this forum</h2>
          {forum?.post?.map((posts) => (
              <Posts key={posts._id} post={posts} />
          ))}
          </div>

        <div className="  ml-2 justify-end hidden  lg:block rounded-xl">
              <Sidebar />
        </div>
        </div>

        
      
    </div>
    </div>
  );
};

export default ForumPage;
