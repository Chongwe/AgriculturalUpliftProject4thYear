import Posts from "./Posts";
import Sidebar from "./Sidebar";
import Avata from "../assets/avatar.png"
import "../styles.css"
import { Avatar } from "@material-tailwind/react";
const Home= () => {
  return (
    <div className="p-4 gap-2 flex">

      
      {/* Posts Section */}

      <div className="  ">
            <div className="justify-center flex  mb-4  ">
              <div className="items-center p-2"> 
                  <Avatar src={Avata} alt = "avatar" variant="circular"></Avatar>
                  <button class=" bg-green-500 hover:bg-goldenrod py-2  px-4 ml-4  text-white  rounded-full focus:outline-none">
                    Create a post
                  </button>
                </div> 
            </div >

        <div className="flex-wrap relative parent  justify-center  flex rounded-xl  bg-green-50">
            <Posts 
            name="Howard Kaira" 
            content="Lorem ipsum dolor, in debitisautem impedit ipsa vero illo maxime sautem impedit ipsa vero illo masautem impedit ipsa vero illo ma illum, facere cum dolore dolores soluta voluptatibus?"/>
            <Posts name="Emma Limbe"
            content=" Lorem ipsum dolor, in debitisautem impedit ipsa vero illo maxime illum,sautem impedit ipsa vero illo ma facere cum dolore dolores soluta voluptatibus?"/>
            <Posts name="Dalitso Chongwe"
            content="Lorem ipsum dolor, in debitisautem impedit ipsa vero illo maximesautem impedit ipsa vero illo masautem impedit ipsa vero illo masautem impedit ipsa vero illo ma illum, facere cum dolore dolores soluta voluptatibus?"/>
            <Posts name="Jimmy Maloya"
            content="Lorem ipsum dolor, in debitisautem impedit ipsa vero illo maxime illum, facere cum dolore dolores soluta voluptatibus?"/>
        </div>
      </div>
      

      {/* Sidebar Section */}
      <div className="flex-shrink-0 w-1/4    hidden md:block rounded-xl">
        <Sidebar/>
      </div>
    </div>
  );
};

export default Home;
