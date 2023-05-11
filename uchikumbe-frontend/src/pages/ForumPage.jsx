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

  console.log(forumId);

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
    <div className="flex flex-col mt-6 gap-12 md:flex-row bg-green-100">
      <div className="md:w-full  p-4">
        <h1 className="text-3xl font-bold mb-4">{forum.title}</h1>

        <div className="p-4 gap-2 flex">
          {/* Sidebar Section */}
          <div className="h-80 w-[500px]  shadow-none">
            <div className="container m-2 mx-auto pt-10">
              <h1 className="text-2xl font-bold text-green-900 ml-2 ">
                {forum.description}
              </h1>
            </div>
          </div>
          {/* Posts Section */}
          <div className="  ">
            <div className="flex-shrink-0 w-1/4   md:block rounded-xl"></div>

            <div className="flex-wrap relative parent  justify-center  flex rounded-xl  bg-green-50">
              {/* <Corousel /> */}
              <Posts
                name="Howard Kaira"
                content="Lorem ipsum dolor, in debitisautem impedit ipsa vero illo maxime sautem impedit ipsa vero illo masautem impedit ipsa vero illo ma illum, facere cum dolore dolores soluta voluptatibus?"
              />
              <Posts
                name="Emma Limbe"
                content=" Lorem ipsum dolor, in debitisautem impedit ipsa vero illo maxime illum,sautem impedit ipsa vero illo ma facere cum dolore dolores soluta voluptatibus?"
              />
              <Posts
                name="Dalitso Chongwe"
                content="Lorem ipsum dolor, in debitisautem impedit ipsa vero illo maximesautem impedit ipsa vero illo masautem impedit ipsa vero illo masautem impedit ipsa vero illo ma illum, facere cum dolore dolores soluta voluptatibus?"
              />
              <Posts
                name="Jimmy Maloya"
                content="Lorem ipsum dolor, in debitisautem impedit ipsa vero illo maxime illum, facere cum dolore dolores soluta voluptatibus?"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumPage;
