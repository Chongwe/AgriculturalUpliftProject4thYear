import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.svg";
import Search from "../utils/Search";
import NavLinks from "./NavLinks";
import SignUp from "../utils/SignUp";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Navbar,
  MobileNav,
  Typography,
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  IconButton,
} from "@material-tailwind/react";

export default function Fun({ user = null }) {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const signInSignUp = (
    <div className=" flex justify-end gap-5 ">
      <Popover
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
      >
        <PopoverHandler>
          <Button
            color="green"
            className="flex gap-2 hover:bg-green-900 rounded-full text-white"
          >
            <FontAwesomeIcon
              icon={faUser}
              className="h-4 w-4 space-x-1 mr-2 "
            />{" "}
            Sign In
          </Button>
        </PopoverHandler>
        <PopoverContent>
          <SignUp />
        </PopoverContent>
      </Popover>
    </div>
  );
  const navList = <NavLinks />;
  // console.log(user._id);
  return (
    <Navbar
      className="mx-auto sticky min-w-[500px] dulation-75 p-0 top-0 z-50 max-w-screen-xl
    bg-opacity-70 backdrop-filter backdrop-blur-md pt-2
    bg-green-900 text-white px-8 lg:px-8 lg:py-0"
    >
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
          {/* <Dialog
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
            </Dialog> */}
        </div>
        <>
          {user !== null && user !== undefined && (
            <div>
              <Link to={`user-profile/${user._id}`} className="hidden md:block">
                <img
                  src={user.image}
                  alt="user"
                  className="w-14 h-12 rounded-lg"
                />
              </Link>
            </div>
          )}
          {user === null && (
            <div className="hidden lg:block ">{signInSignUp}</div>
          )}
        </>
        {/* <div className="hidden lg:block ">{signInSignUp}</div> */}
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
          <span className="p-3"> {navList} </span>
          <div className="ml-auto justify-end ">
            <span className="p-3 justify-right text-right">
              {" "}
              {signInSignUp}{" "}
            </span>
            <Search />
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
}
