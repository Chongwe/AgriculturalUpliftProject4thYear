import Sidebar from "../components/Sidebar";
import "../styles.css";
import Spinner from "../components/Spinner";
import { client } from "../client";
import { useEffect, useState } from "react";
import { postQueryforums } from "../utils/data";
import MasonryLayout from "../Layout/MasonryLayout";
import { fetchUser } from "../utils/fetchUser";
import { userQuery } from "../utils/data";

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
  }, [userInfo?.sub]);

  useEffect(() => {
    setLoading(true);
    client.fetch(postQueryforums).then((data) => {
      const flattenedPosts = data.reduce((accumulator, subforum) => {
        if (subforum.post && subforum.post.length > 0) {
          accumulator.push(...subforum.post);
        }
        return accumulator;
      }, []);
      // Sort the posts by _createdAt in descending order
      const sortedPosts = flattenedPosts.sort(
        (a, b) => new Date(b._createdAt) - new Date(a._createdAt)
      );

      setPosts(sortedPosts);
      // console.log(flattenedPosts);
      // console.log(posts);
      setLoading(false);
    });
  }, []);

  if (loading) return <Spinner message="Loading Posts" />;
  if (!posts?.length) return <h2>No posts found</h2>;

  return (
    <div className=" ">
      <div className="lg:w-full w-full pt-4 bg-green-100 justify-center rounded-none sm:rounded-2xl min-w-screen-sm flex">
        <div className="flex-wrap  lg:-ml-56  mt-8 mb-2  flex rounded-xl bg-transparent sm:bg-green-50">
          {posts && <MasonryLayout posts={posts} />}
        </div>

        <div className="  ml-2 justify-end hidden  lg:block rounded-xl">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;
