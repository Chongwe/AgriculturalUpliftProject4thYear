import { useState, useEffect } from "react";
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/logo.svg"
import Search from "../utils/Search";
import NavLinks from "./NavLinks";



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
      
    <a href="#" className="mr-2 hover:text-green-900">
      <FontAwesomeIcon icon={faUser} className="h-4 w-4 space-x-1 mr-2 text-white"/> 
      
      Login</a>
    <a href="#" className="bg-green-600 text-white rounded-full py-1 px-2 hover:bg-green-400">

      {/* <Link to="/signIn"></Link>  */}
      
      Sign Up
     </a>
  </div>

  );

  const navList = (
      <NavLinks />
  );
 
 
  return (
    <Navbar className="mx-auto sticky p-0 top-0 z-50 max-w-screen-xl
    bg-opacity-70 backdrop-filter backdrop-blur-md pt-2
    bg-green-900 text-white px-8 lg:px-8 lg:py-0">
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
          <span className="text-2xl  ">Uchikumbe</span>
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