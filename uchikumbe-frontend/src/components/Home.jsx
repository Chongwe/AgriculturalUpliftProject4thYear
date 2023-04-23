import Posts from "./Posts";
import Sidebar from "./Sidebar";
const Home= () => {
  return (
    <div className="p-4 gap-2  flex">

      
      <div className="flex-wrap ml-2 justify-center md:ml-20 flex rounded-xl rou bg-green-100">
        
      <Posts/>
      <Posts />
      <Posts />

    

      </div>
      
      {/* Left Section */}
      <div className="flex-shrink-0 w-1/4  hidden md:block rounded-xl">

       
      
        <Sidebar/>

      </div>
    </div>
  );
};

export default Home;
