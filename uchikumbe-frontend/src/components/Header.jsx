import { useState, useEffect } from "react";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/logo.svg"
import Search from "../utils/Search";
// import {Link} from 'react-router-dom'
import {
  Input,
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
export default function Fun() {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const signInSignUp = (

    <div className=" gap-5 ">
    <a href="#" className="mr-2 hover:text-gray-400">Login</a>
    <a href="#" className="bg-green-600 text-white rounded-full py-1 px-2 hover:bg-green-600">

      {/* <Link to="/signIn"></Link>  */}
      
      Sign Up
     </a>
  </div>

  );
 
  const navList = (
    <ul className=" flex gap-10 lg:mb-0 lg:mt-0  lg:flex-row lg:items-center lg:gap-20">
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <a href="#" className="flex  hover:text-green-100 focus:border-b focus:border-green-500 focus:text-white">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <a href="#" className="flex  hover:text-green-100 focus:border-b focus:border-green-500 focus:text-white">
          People
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <a href="#" className="flex  hover:text-green-100 focus:border-b focus:border-green-500 focus:text-white">
          News
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <a href="#" className="flex  hover:text-green-100 focus:border-b focus:border-green-500 focus:text-white">
         Forum
        </a>
      </Typography>
    </ul>
  );

 
  return (
    <Navbar className="mx-auto sticky p-0 top-0 z-50 max-w-screen-xl
    bg-opacity-80 backdrop-filter backdrop-blur-md
    bg-green-900 text-white px-8 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-white">

        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 text-lg cursor-pointer items-center flex py-1.5 font-normal"
        >
        <img 
            alt="Uchikumbe logo"
            className="object-center t mr-2 h-12 "
            src={logo}
            />
          <span className="text-2xl ">Uchikumbe</span>
        </Typography>
        <div className="hidden lg:block">
            
            <Search />
            {navList}
            
       


        </div>
       
       <div className="hidden lg:block ">
        {signInSignUp}

       </div>
       
        <IconButton
          variant="text"
          className="ml-auto h-10 w-10 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={true}
          onClick={() => setOpenNav(!openNav)}
        >
        <FontAwesomeIcon className="h-10" icon={faBars} />  
        
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container p-3 text-center mx-auto">
          <span className="p-3">  {navList} </span>
          <div className="ml-auto  ">
           
            <span className="p-3"> {signInSignUp} </span> 
             
              <Search />
          </div>
           
         
        </div>
      </MobileNav>
    </Navbar>
  );
}