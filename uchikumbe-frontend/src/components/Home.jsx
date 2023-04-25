import Posts from "./Posts";
import Sidebar from "./Sidebar";
const Home= () => {
  return (
    <div className="p-4 gap-2  flex">
      {/* Posts Section */}
      <div className="flex-wrap justify-center  flex rounded-xl  bg-green-100">
          <Posts/>
          <Posts />
          <Posts/>
          <Posts />
      </div>


      {/* Sidebar Section */}
      <div className="flex-shrink-0 w-1/4  hidden md:block rounded-xl">
        <Sidebar/>
      </div>
    </div>
  );
};

export default Home;
