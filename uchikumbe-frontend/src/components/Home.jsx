import Sidebar from "./Sidebar";
import "../styles.css";
import Spinner from "./Spinner"
import {client} from "../client"
import { useEffect, useState } from "react";
import { postsQuery } from "../utils/data";
import MasonryLayout from "./MasonryLayout";
import { fetchUser } from "../utils/fetchUser";
import { Link } from "react-router-dom";
import { userQuery,} from "../utils/data";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState(null);
  const [user, setUser] = useState(null);

  const userInfo = fetchUser();

  useEffect(() => {
    const query = userQuery(userInfo?.sub);

    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  });

   useEffect(() => {
     setLoading(true)
     client.fetch(postsQuery)
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
   }, [])
   if(loading) return <Spinner message="Loading Posts"/>
   if (!posts?.length) return <h2>No posts found</h2>;

  return (
    <div className="">
        {user !== null && user !== undefined && (
        <div className="m-4 text-center ">
          <Link to={`/create-post/${user?._id}`}>
            <button class=" bg-green-500 hover:bg-goldenrod transition-all duration-100 hover:scale-95 py-2 justify-center px-4 ml-4  text-white  rounded-full focus:outline-none">
              Create a Post
            </button>
            <hr className="my-4 border-goldenrod" />
          </Link>
        </div>
      )}

      <div className="pt-4 bg-green-100 gap-2 rounded-2xl sm:justify-start justify-center duration-75 ease-out flex">

            <div className="flex-wrap relative parent md:ml-12  justify-center mt-8 mb-2 min-w-[570px] flex rounded-xl  bg-green-50">
              {posts && <MasonryLayout posts={posts}/>}
            </div>
          {/* Sidebar Section */}
          <div className=" items-center  hidden md:block rounded-xl">
            <Sidebar />
          </div>
      </div>
  
  </div>
  );
};

export default Home;
