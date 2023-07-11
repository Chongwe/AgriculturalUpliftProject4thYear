import { useEffect, useState } from "react";
import Posts from "../../components/Cards/Posts";
import "../../styles.css";
import { useParams } from "react-router-dom";
import { forumDetailsQuery } from "../../utils/data";
import { fetchUser } from "../../utils/fetchUser";
import { Link } from "react-router-dom";
import { client } from "../../client";
import Spinner from "../../components/Spinner";
import { userQuery } from "../../utils/data";
import Sidebar from "../../components/Sidebar";

/**
 * The ForumPage component represents the forum page.
 * It renders the forum details, including the forum title, description, and posts.
 * Users can join the forum and create new posts if they are a member.
 *
 * @component
 * @category Pages
 * @subcategory ForumPages
 */
const ForumPage = () => {
  /**
   * State variable for storing the forum details.
   * @type {object | null}
   */
  const [forum, setForum] = useState(null);

  /**
   * Retrieves the `forumId` parameter from the URL.
   */
  const { forumId } = useParams();

  /**
   * State variable for storing the user details.
   * @type {object | null}
   */
  const [user, setUser] = useState(null);

  /**
   * State variable for storing the user details.
   */
  const userInfo = fetchUser();

  /**
   * Fetches the user data based on the user ID.
   * Updates the `user` state variable with the fetched data.
   */
  /**
   * Fetches the user data based on the user ID.
   * Updates the `user` state variable with the fetched data.
   *
   * @memberof UserProfile
   * @function useEffect
   * @inner
   * @param {function} effect - The effect function to be executed.
   * @param {Array} deps - An array of dependencies to determine when the effect should re-run.
   * @returns {undefined}
   */
  useEffect(() => {
    const query = userQuery(userInfo?.sub);
    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  });

  /**
   * Fetches the forum details based on the provided `forumId`.
   * Updates the `forum` state variable with the fetched data.
   *
   * @memberof ForumPage
   * @function useEffect
   * @inner
   * @param {function} effect - The effect function to be executed.
   * @param {Array} deps - An array of dependencies to determine when the effect should re-run.
   * @returns {undefined}
   */
  useEffect(() => {
    const fetchForumData = () => {
      const query = forumDetailsQuery(forumId);

      // Fetch the forum details based on the forum ID
      client.fetch(query).then((data) => {
        setForum(data[0]);
      });
    };

    fetchForumData();
  }, [forumId]);

  /**
   * Checks if the user is a member of the forum.
   *
   * @memberof ForumPage
   * @type {boolean}
   */
  const isMember =
    user &&
    forum &&
    forum.memberOf?.some((member) => member.userId === user._id);

  /**
   * Joins the forum by updating the `memberOf` array with the user's details.
   * Reloads the page after joining the forum.
   *
   * @memberof ForumPage
   * @function joinForum
   * @inner
   * @returns {undefined}
   */
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

    // Join the forum by updating the memberOf array
    client
      .patch(forumId)
      .setIfMissing({ memberOf: [] })
      .insert("after", "memberOf[-1]", [doc])
      .commit()
      .then(() => {
        window.location.reload();
      });
  };

  /**
   * Renders a loading spinner while the forum details are being fetched.
   */
  if (!forum) {
    return <Spinner message="Loading Forum" />;
  }

  /**
   * Renders the forum page.
   */
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
            <h2 className="text-3xl font-bold text-green-500 m-2">
              Posts in this forum
            </h2>
            {forum?.post?.map((posts) => (
              <Posts key={posts._id} post={posts} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumPage;
