import { useEffect, useState } from "react";
import Posts from "../components/Posts";
import "../styles.css";
import { useNavigate, useParams } from "react-router-dom";
import { forumDetailsQuery } from "../utils/data";
import { client } from "../client";
import Spinner from "../components/Spinner";

const ForumPage = () => {
  const [forum, setForum] = useState(null);
  const navigate = useNavigate();
  const { forumId } = useParams();

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
        <h1 className="text-3xl text-green-900 font-bold mb-4">{forum.title}</h1>
            <h1 className=" text-goldenrod -mt-4 ">
              {forum.description}
            </h1>
        <div className="p-4 gap-2 flex">
          {/* Sidebar Section */}
          <div className="h-80 w-[500px]  shadow-none">
            <div className="container m-2 mx-auto pt-10">
              
            </div>
          </div>
          {/* Posts Section */}
          <div className="  ">
            <div className="flex-shrink-0 w-1/4   md:block rounded-xl"></div>

            <div className="flex-wrap relative parent  justify-center  flex rounded-xl  bg-green-50">
              {/* <Corousel /> */}
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumPage;
