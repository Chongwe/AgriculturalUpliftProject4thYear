import Posts from "./Posts";
import Sidebar from "./Sidebar";
import "../styles.css";
import Spinner from "./Spinner"
import {client} from "../client"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { postsQuery } from "../utils/data";
import MasonryLayout from "./MasonryLayout";


const Home = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState(null);
  

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
  <div className="p-4 bg-green-100 gap-2 rounded-2xl  duration-75 ease-out flex">
     
        <div className="flex-wrap relative parent  justify-center mt-8 flex rounded-xl  bg-green-50">
          {posts && <MasonryLayout posts={posts}/>}

      
        </div>
      {/* Sidebar Section */}
      <div className="   hidden md:block rounded-xl">
        <Sidebar />
      </div>
  </div>
  );
};

export default Home;
