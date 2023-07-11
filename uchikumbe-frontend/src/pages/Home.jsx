import Sidebar from "../components/Sidebar";
import "../styles.css";
import Spinner from "../components/Spinner";
import { client } from "../client";
import { useEffect, useState } from "react";
import { postQueryforums } from "../utils/data";
import MasonryLayout from "../Layout/MasonryLayout";
import { fetchUser } from "../utils/fetchUser";
import { userQuery } from "../utils/data";

/**
 * The Home component represents the home page of the website.
 * It displays posts from different subforums in a masonry layout.
 *
 * @component
 * @category Pages
 */
const Home = () => {
  /**
   * loading - State variable for keeping track of whether the posts are currently being loaded or not.
   * @type {boolean}
   */
  const [loading, setLoading] = useState(false);

  /**
   * posts - State variable for storing the fetched posts from different subforums.
   * @type {Array|null}
   */
  const [posts, setPosts] = useState(null);

  /**
   * user - State variable for storing the user information fetched from the server.
   * @type {Object|null}
   */
  const [user, setUser] = useState(null);

  /**
   *  userInfo - User information fetched from the server.
   * @type {Object|null}
   */
  const userInfo = fetchUser();

  /**
   * The `useEffect` hook is used to fetch user information based on the user ID.
   *
   * @memberof Home
   * @function useEffect
   * @inner
   * @param {function} effect - The effect function to be executed.
   * @param {Array} deps - An array of dependencies to determine when the effect should re-run.
   * @returns {undefined}
   */
  useEffect(() => {
    const query = userQuery(userInfo?.sub);

    // Fetch user information based on the user ID
    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, [userInfo?.sub]);

  /**
   * The `useEffect` hook is used to fetch posts from different subforums and update the state variables `posts` and `loading`.
   *
   * @memberof Home
   * @function useEffect
   * @inner
   * @param {function} effect - The effect function to be executed.
   * @param {Array} deps - An array of dependencies to determine when the effect should re-run.
   * @returns {undefined}
   */
  useEffect(() => {
    setLoading(true);

    // Fetch posts from different subforums
    client.fetch(postQueryforums).then((data) => {
      /* This code is flattening the array of posts fetched from different subforums
      into a single array. */
      const flattenedPosts = data.reduce((accumulator, subforum) => {
        if (subforum.post && subforum.post.length > 0) {
          accumulator.push(...subforum.post);
        }
        return accumulator;
      }, []);

      /* This code is sorting the `flattenedPosts` array of posts based on the `_createdAt`
      property in descending order. */
      const sortedPosts = flattenedPosts.sort(
        (a, b) => new Date(b._createdAt) - new Date(a._createdAt)
      );

      setPosts(sortedPosts);
      setLoading(false);
    });
  }, []);

  /* The line `if (loading) return <Spinner message="Loading Posts" />;` is checking if the `loading`
state variable is `true`. If it is `true`, it means that the posts are currently being loaded, so it
returns a `Spinner` component with a message "Loading Posts". This is a common pattern used to
display a loading indicator while waiting for data to be fetched or processed. */
  if (loading) return <Spinner message="Loading Posts" />;

  /* The line `if (!posts?.length) return <h2>No posts found</h2>;` is checking if the `posts` array is
  empty or null. If the `posts` array is either empty or null, it means that no posts were fetched
  from the server. In that case, it returns a `<h2>` element with the text "No posts found" to
  indicate that there are no posts available to display. */
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
