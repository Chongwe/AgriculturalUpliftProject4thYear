import React from "react";
import logo from "../assets/logo.svg"

const Header = () => {
  return (
    <header className="bg-green-900 text-white">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          
            <img className="h-13 mr-2" src={logo} alt="Logo" />
           
          <h1 className="font-bold text-xl">Uchikumbe</h1>
        </div>
        <div className="hidden md:block">
          <form className="mr-4">
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
            <ul className="flex">
              <li className="mr-6">
                <a href="#" className="hover:text-gray-400">Home</a>
              </li>
              <li className="mr-6">
                <a href="#" className="hover:text-gray-400">About</a>
              </li>
              <li className="mr-6">
                <a href="#" className="hover:text-gray-400">Blog</a>
              </li>
              <li className="mr-6">
                <a href="#" className="hover:text-gray-400">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <a href="#" className="mr-2 hover:text-gray-400">Sign In</a>
          <a href="#" className="bg-green-500 text-white rounded-md py-1 px-2 hover:bg-green-600">Sign Up</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
