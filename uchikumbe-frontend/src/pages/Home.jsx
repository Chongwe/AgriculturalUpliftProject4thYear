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
 */
const Home = () => {
  /* The line `const [loading, setLoading] = useState(false);` is using the `useState` hook to create a
  state variable called `loading` and a corresponding setter function called `setLoading`. The
  initial value of `loading` is set to `false`. This state variable is used to keep track of whether
  the posts are currently being loaded or not. */
  const [loading, setLoading] = useState(false);

  /* The line `const [posts, setPosts] = useState(null);` is using the `useState` hook to create a
  state variable called `posts` and a corresponding setter function called `setPosts`. The initial
  value of `posts` is set to `null`. This state variable is used to store the posts fetched from
  different subforums. The `setPosts` function can be used to update the value of `posts` later on. */
  const [posts, setPosts] = useState(null);

  /* The line `const [user, setUser] = useState(null);` is using the `useState` hook to create a state
  variable called `user` and a corresponding setter function called `setUser`. The initial value of
  `user` is set to `null`. This state variable is used to store the user information fetched from
  the server. The `setUser` function can be used to update the value of `user` later on. */
  const [user, setUser] = useState(null);

  /* The line `const userInfo = fetchUser();` is calling the `fetchUser` function and assigning its
  return value to the `userInfo` constant. The `fetchUser` function is likely responsible for
  fetching user information, possibly from an API or a database. The `userInfo` constant is then
  used in the subsequent `useEffect` hook to fetch user information based on the user ID. */
  const userInfo = fetchUser();

  /* The `useEffect` hook in the code is responsible for fetching user information based on the user
  ID/sub. */
  useEffect(() => {
    const query = userQuery(userInfo?.sub);

    // Fetch user information based on the user ID
    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, [userInfo?.sub]);

  /* The `useEffect` hook in the code is responsible for fetching posts from different subforums and
updating the state variables `posts` and `loading`. */
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
