import React, { useState} from "react";
import logo from "../assets/logo.svg"
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    const [showLinks, setShowLinks] = useState(false);

    const toggleLinks = () => {
      setShowLinks(!showLinks);
    };


  return (
    <header className="bg-green-900 flex  text-white">
      <div className="container flex-wrap mx-auto flex ml-1.5 mr-1.5 items-center justify-between py-4">
        <div className="flex items-center">
          
            <img className="h-12 mr-2" src={logo} alt="Logo" />
           
          <h1 className="font-bold  text-xl">Uchikumbe</h1>
        </div>
        <div className="hidden flex md:block">
          <form className=" mb-6 mr-4">
            <input
              type="text"
              placeholder="Search..."
              className="bg-white rounded-full py-1 px-2 w-64"
            />
            <button className="text-white rounded-md py-1 px-2 ml-2">
              Search
            </button>
          </form>
          <nav>
            <ul className="  flex">
              <li className="mr-6">
                <a href="#" className="hover:text-gray-400">Home</a>
              </li>
              <li className="mr-6">
                <a href="#" className="hover:text-gray-400">People</a>
              </li>
              <li className="mr-6">
                <a href="#" className="hover:text-gray-400">News</a>
              </li>
              <li className="mr-6">
                <a href="#" className="hover:text-gray-400">Forums</a>
              </li>
            </ul>
          </nav>
        </div>
       

       <div className="flex  ">

       <div className="">
          <a href="#" className="mr-2 hover:text-gray-400">Login</a>
          <a href="#" className="bg-green-500 text-white rounded-md py-1 px-2 hover:bg-green-600">Sign Up</a>
        </div>
      </div>
      <div className={`md:hidden ${showLinks ? 'block' : 'hidden'}`}>
        <nav className="px-4 py-2 bg-green-900">
          <a href="#" className="block text-white font-medium mb-2 hover:underline">Home</a>
          <a href="#" className="block text-white font-medium mb-2 hover:underline">About</a>
          <a href="#" className="block text-white font-medium mb-2 hover:underline">Contact</a>
          <a href="#" className="block text-white font-medium mb-2 hover:underline">Blog</a>
        </nav>
      </div>

       </div>
       
      

     

    </header>
  );
};

export default Header;
