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

// Testing the deployment again
const ForumPage = () => {
  const [forum, setForum] = useState(null);
  // const navigate = useNavigate();
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

  // const joinForum = () => {
  //   const doc = {
  //     _type: "memberOf",
  //     postedBy: {
  //       _type: "postedByBy",
  //       _ref: user._id,
  //     },
  //     userId: user._id,
  //   };

  //   client
  //     .patch(forumId)
  //     .setIfMissing({ memberOf: [] })
  //     .insert("after", "memberOf[-1]", [doc])
  //     .commit()
  //     .then(() => {
  //       navigate(`/forum-page/${forumId}`);
  //     });
  // };

  if (!forum) {
    return <Spinner message="Loading Forum" />;
  }
  return (
    <div className="flex flex-wrap mt-2 gap-4  bg-green-100">
      <div className="md:w-full  p-4">
        <div>
          <div className="flex flex-row justify-between">
            <div>
              <h1 className="text-3xl text-green-900 font-bold mb-4">
                {forum.title}
              </h1>
              <h1 className=" text-goldenrod -mt-4 ">{forum.description}</h1>
            </div>

            {user !== null && user !== undefined && (
              <div className="m-4 text-center ">
                <Link to={`/create-post/${forum?._id}`}>
                  <button class=" bg-green-500  hover:bg-goldenrod transition-all duration-100 hover:scale-95 py-2 justify-end px-4 ml-4  text-white  rounded-full focus:outline-none">
                    Create a Post
                  </button>
                </Link>
              </div>
            )}
          </div>

          <hr className="my-4 border-goldenrod" />
        </div>

        <div className=" bg-green-50 flex-row  rounded-xl p-2 ">
          {forum?.post?.map((posts) => (
            <div className="flex-row relative parent  min-w-[570px]  justify-center w-max  mt-2 mb-2  flex rounded-xl ">
              <Posts key={posts._id} post={posts} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForumPage;
