import Posts from "./Posts";
import Sidebar from "./Sidebar";
import "../styles.css";
// import Corousel from "./Corousel"

const Home = () => {
  return (
    <div className="p-4 gap-2 flex">
      {/* Posts Section */}
      <div className="  ">
        {/* <div className="justify-end flex  mb-4  ">
              <div className="items-center p-2"> 
                  <NavLink to="post">
                    <button class=" bg-green-500 hover:bg-goldenrod py-2  px-4 ml-4  text-white  rounded-full focus:outline-none">
                    Create a post
                  </button>
                  </NavLink>
                </div> 
            </div > */}

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
      {/* Sidebar Section */}
      <div className="flex-shrink-0 w-1/4    hidden md:block rounded-xl">
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
