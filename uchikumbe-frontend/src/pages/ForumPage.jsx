import { useEffect, useState } from "react";
import Posts from "../components/Posts";
import "../styles.css";
import { useNavigate, useParams } from "react-router-dom";
import { forumDetailsQuery } from "../utils/data";
import { fetchUser } from "../utils/fetchUser";
import { Link } from "react-router-dom";
import { client } from "../client";
import Spinner from "../components/Spinner";
import { userQuery } from "../utils/data";
import MasonryLayout from "../components/MasonryLayout";

const ForumPage = () => {
  const [forum, setForum] = useState(null);
  const navigate = useNavigate();
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

  if (!forum) {
    return <Spinner message="Loading Forum" />;
  }
  return (
    <div className="flex flex-col h-screen mt-6 gap-12 md:flex-row bg-green-100">
      <div className="md:w-full  p-4">
        <h1 className="text-3xl text-green-900 font-bold mb-4">
          {forum.title}
        </h1>
        <h1 className=" text-goldenrod -mt-4 ">{forum.description}</h1>
        <div className="p-4 gap-2 flex">
          {/* Sidebar Section */}
          <div className="h-80 w-[500px]  shadow-none">
            <div className="container m-2 mx-auto pt-10"></div>
          </div>
          {/* Posts Section */}
          <div className="  ">
            {user !== null && user !== undefined && (
              <div className="m-4 text-center ">
                <Link to={`/create-post/${forum?._id}`}>
                  <button class=" bg-green-500 hover:bg-goldenrod transition-all duration-100 hover:scale-95 py-2 justify-center px-4 ml-4  text-white  rounded-full focus:outline-none">
                    Create a Post
                  </button>
                  <hr className="my-4 border-goldenrod" />
                </Link>
              </div>
            )}
            {forum?.post?.map((posts, i) => (
              <div className="flex-wrap relative parent min-w-[570px] md:ml-12 justify-center w-max  mt-8 mb-2  flex rounded-xl  bg-green-50">
                {/* <MasonryLayout posts={posts} /> */}
                {/* <p>{posts.title}</p> */}
                <Posts key={i} post={posts} />
                {/* <p>{posts.postedBy.userName} hey</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumPage;
