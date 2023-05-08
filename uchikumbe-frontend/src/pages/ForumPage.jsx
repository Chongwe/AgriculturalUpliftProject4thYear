import Posts from "../components/Posts";
import "../styles.css";
const ForumPage = () => {
  return (
    <div className="p-4 gap-2 flex">

      {/* Sidebar Section */}
      <div  className="h-80 w-[500px]  shadow-none"   >
            <div className="container m-2 mx-auto pt-10">
              <h1 className="text-2xl font-bold text-green-900 ml-2 ">Whats new?</h1>
                <p className="border-l-2 p-4 m-3 border-goldenrod">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ut magni 
                  inventore quidem eius corrupti repudiandae nisi nostrum
                  necessitatibus eligendi praesentium voluptatibus molestiae,
                    aperiam error illo deserunt obcaecati aspernatur itaque.</p>
            </div>
  
          </div>
      {/* Posts Section */}
      <div className="  ">
      <div className="flex-shrink-0 w-1/4   md:block rounded-xl">
        
      </div>
     
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
  );
};

export default ForumPage;
