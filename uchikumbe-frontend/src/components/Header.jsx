import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.svg";
import Search from "../utils/Search";
import NavLinks from "./NavLinks";
import { createOrGetUser } from "../utils/index";
import { GoogleLogin } from "@react-oauth/google";
import SignUp from "../utils/SignUp";
import { NavLink } from "react-router-dom";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Navbar,
  Collapse,
  Typography,
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  IconButton,
  Tooltip,
  Drawer,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  HomeIcon,
  NewspaperIcon,
  UserCircleIcon,
  UserGroupIcon,
  Square2StackIcon,
  PowerIcon,
  ArrowRightCircleIcon,
  
} from "@heroicons/react/24/solid";

export default function Fun({ user = null }) {
  const [openNav, setOpenNav] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const handleLinkClick = () => {
    setOpenNav(false);
  };

  

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
            className="flex gap-2 hover:bg-green-900 justify-center rounded-full w-32 text-white"
          >
            <FontAwesomeIcon
              icon={faUser}
              className="h-4 w-4 space-x-1 mr-2 "
            />
            Sign In
          </Button>
        </PopoverHandler>
        <PopoverContent>
          <SignUp />
        </PopoverContent>
      </Popover>
    </div>
  );
  const navList = <NavLinks onClick={handleLinkClick} />;
  // console.log(user._id);
  return (
    <Navbar
    className="lg:w-full  w-full sm:border-2 border-none sm:rounded-xl rounded-none mx-auto sticky min-w-screen-sm duration-75 p-0 top-0 z-50 max-w-screen-xl bg-opacity-70 backdrop-filter backdrop-blur-md pt-2 bg-green-900 text-white px-8 lg:px-8 lg:py-0">
      <div className="container mx-auto flex items-center  justify-between text-white">
       
        <NavLink to="/">
            <div className="mr-4 text-lg  items-center flex py-1.5 font-normal">
              <img alt="Uchikumbe logo" src={logo}
                className="object-center  mr-2 h-12 "
              />
              <span className="text-2xl  ">Uchikumbe</span>
            </div>
        </NavLink>
        <div className="hidden lg:block">
          <Search />
          {navList}
        </div>
        <>
          {user !== null && user !== undefined && (
            <div>
              <Link
                to={`user-profile/${user._id}`}
                className="hidden md:block"
                onClick={handleLinkClick}
              >
                <Tooltip
                  content={user.userName}
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                  className="bg-goldenrod md:text-center mt-2 mr-4 rounded-full"
                >
                  <img
                    src={user.image}
                    alt="user"
                    className="w-10 items-center  sm:ml-32 h-10 rounded-full "
                  />
                </Tooltip>
              </Link>
            </div>
          )}
          {user === null && (
            <div className="hidden lg:block ">{signInSignUp}</div>
          )}
        </>
        <React.Fragment>
          <FontAwesomeIcon 
          className="h-7 ml-auto lg:hidden" 
          onClick={openDrawer} 
          icon={faBars} />

        {open &&  <Drawer 
          placement="right" 
          unmountOnExit={true}
          rootClassName="fixed inset-y-0 right-0"
          className="lg:hidden  rounded-xl bg-transparent " 
          open={open} onClose={closeDrawer}>
           
            <List className=" text-green-50 rounded-xl  bg-opacity-90  bg-green-900 backdrop-blur-md backdrop-filter  ">
          
                <div className="mr-2 flex mt-5 bg-transparent items-center justify-end ">
                    <XMarkIcon  
                    onClick={closeDrawer} 
                    strokeWidth={3} 
                    className="h-7 ml-auto mr-4 justify-center w-7" />
                </div>
           {user !== null && user !== undefined &&(       
            <Link  to={`user-profile/${user._id}`} onClick={handleLinkClick && closeDrawer}>    
              <ListItem>
                <ListItemPrefix>
                  <img
                      src={user.image}
                      alt="user"
                      className="w-10 items-center  sm:ml-32 h-10 rounded-full "
                  />
                </ListItemPrefix>
               {user.userName}
              </ListItem>
            </Link>  
            )}   
            <NavLink onClick={closeDrawer} to="/">    
              <ListItem>
                <ListItemPrefix>
                  <HomeIcon className="h-5 w-5" />
                </ListItemPrefix>
                Home
              </ListItem>
            </NavLink> 
            <NavLink onClick={closeDrawer} to="people">
              <ListItem>
                <ListItemPrefix>
                  <UserCircleIcon className="h-5 w-5" />
                </ListItemPrefix>
                People
              </ListItem>
            </NavLink> 
            <NavLink onClick={closeDrawer} to="news">
              <ListItem>
                <ListItemPrefix>
                  <NewspaperIcon className="h-5 w-5" />
                </ListItemPrefix>
                News
              </ListItem>
            </NavLink>
            <NavLink onClick={closeDrawer} to="forum">
              <ListItem>
                <ListItemPrefix>
                  <UserGroupIcon className="h-5 w-5" />
                </ListItemPrefix>
                Forum
              </ListItem>
            </NavLink>
            <NavLink onClick={closeDrawer} to="Tools">
              <ListItem>
                <ListItemPrefix>
                  <Square2StackIcon className="h-5 w-5" />
                </ListItemPrefix>
                Tools
              </ListItem>
            </NavLink>
          
            { user === null && ( 
                <NavLink onClick={signInSignUp}>  
                  <ListItem >
                    <ListItemPrefix>
                      <ArrowRightCircleIcon className="w-5 h-5"/>
                    </ListItemPrefix>
                    <GoogleLogin
                      onSuccess={(response) =>
                        createOrGetUser(response).then(() => {
                          window.location.reload();
                        })
                      }
                      onError={() => {
                        console.log("Login Failed");
                      }}
                    />
                  </ListItem>
                </NavLink> 
              )}
            </List>
          </Drawer>}
        </React.Fragment>
      </div>
    </Navbar>
  );
}