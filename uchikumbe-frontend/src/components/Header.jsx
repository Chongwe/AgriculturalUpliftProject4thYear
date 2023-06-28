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
  PresentationChartBarIcon,
  HomeIcon,
  NewspaperIcon,
  UserCircleIcon,
  UserGroupIcon,
  Square2StackIcon,
  PowerIcon,
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
  const navList = <NavLinks onClick={handleLinkClick} />;
  // console.log(user._id);
  return (
    <Navbar
    className="lg:w-full w-full sm:border-2 border-none sm:rounded-xl rounded-none mx-auto sticky min-w-screen-sm duration-75 p-0 top-0 z-50 max-w-screen-xl bg-opacity-70 backdrop-filter backdrop-blur-md pt-2 bg-green-900 text-white px-8 lg:px-8 lg:py-0">
    
      <div className="container mx-auto flex items-center  justify-between text-white">
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
        {/* <IconButton
          variant="text"
          className="ml-auto h-10 w-10 sm:-ml-4 justify-center text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
         
          onClick={() => setOpenNav(!openNav)}
        >
          <FontAwesomeIcon className="h-5" icon={faBars} />
        </IconButton> */}

        <React.Fragment>
        <IconButton
          variant="text"
          className="ml-auto h-7 w-7  mr-4 justify-center text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
         onClick={openDrawer}
        >
          <FontAwesomeIcon className="h-7 w-7   justify-center" icon={faBars} />
        </IconButton>
          <Drawer placement="right" className="lg:hidden  rounded-xl bg-transparent " open={open} onClose={closeDrawer}>
           
            <List className="bg-green-100 text-green-900 rounded-lg">
                <div className="mr-2 flex  bg-transparent items-center justify-end ">
              
                  <IconButton variant="text" 
                  color="blue-gray"  
                  onClick={closeDrawer}
                  className="ml-auto h-7 w-7  mr-4 justify-center"
                  >
                  
                    <XMarkIcon strokeWidth={3} className="h-7 w-7" />
                  </IconButton>
                  </div>
              <ListItem>
                <ListItemPrefix>
                  <HomeIcon className="h-5 w-5" />
                </ListItemPrefix>
                Home
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <UserCircleIcon className="h-5 w-5" />
                </ListItemPrefix>
                People
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <NewspaperIcon className="h-5 w-5" />
                </ListItemPrefix>
                News
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <UserGroupIcon className="h-5 w-5" />
                </ListItemPrefix>
                Forum
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <Square2StackIcon className="h-5 w-5" />
                </ListItemPrefix>
                Tools
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <PowerIcon className="h-5 w-5" />
                </ListItemPrefix>
                Log Out
              </ListItem>
            </List>
          </Drawer>
        </React.Fragment>

      </div>
      <Collapse open={openNav}>
        <div className="container items-center p-3  mx-auto">
          <span className="p-3"> {navList} </span>
          <div className="ml-auto justify-end ">
            <span className="p-3 justify-right text-right">{signInSignUp}</span>
            <Search />
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}
