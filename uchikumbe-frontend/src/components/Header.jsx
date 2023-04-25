import { useState, useEffect } from "react";
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/logo.svg"
import Search from "../utils/Search";
import NavLinks from "./NavLinks";
import SignUp from "../utils/SignUp"
import LogIn from "../utils/LogIn";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Dialog
} from "@material-tailwind/react";

export default function Fun() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    const [openLogin, setLoginOpen] = React.useState(false);
    const handleOpenLogin = () => setLoginOpen((cur) => !cur)

  const signInSignUp = (
    <div className=" flex justify-end gap-5 ">
      <Button onClick={handleOpenLogin} variant="text" className="flex gap-2 hover:bg-green-400 rounded-full text-white">
        <FontAwesomeIcon icon={faUser} className="h-4 w-4 space-x-1 mr-2 "/> Login 
      </Button>
      <Button  onClick={handleOpen} variant="filled" color="green" className="rounded-full text-white hover:bg-green-400"> Sign UP</Button>
   </div>
  );
  const navList = (
      <NavLinks />
  );
  return ( 
    <Navbar className="mx-auto sticky min-w-[500px] dulation-75 p-0 top-0 z-50 max-w-screen-xl
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
            <Dialog
              size="md"             
              open={open}
              handler={handleOpen}             
              className="bg-transparent shadow-none"
            >
             {handleOpen && <SignUp />}
            </Dialog>
            <Dialog
              size="md"              
              open={openLogin}
              handler={handleOpenLogin}             
              className="bg-transparent shadow-none"
            >
             {handleOpen && <LogIn />}
            </Dialog>
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
        <div className="container items-center p-3  mx-auto">
          <span className="p-3">  {navList} </span>
          <div className="ml-auto justify-end ">        
            <span className="p-3 justify-right text-right"> {signInSignUp} </span>          
              <Search />
          </div>        
        </div>
      </MobileNav>
    </Navbar>
  ); 
}