import logo from "../../assets/logo.svg";
import {
  Popover,
  PopoverHandler,
  PopoverContent,

  Typography,
  List,
  ListItem,
  ListItemPrefix
} from "@material-tailwind/react";
import {
  EnvelopeIcon,
  UserCircleIcon
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="lg:w-full sm:min-w-screen-sm rounded-t-2xl bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
        <NavLink to='/'>
                  <img src={logo} alt="Uchikumbe logo" className="w-12 text-center" />

        </NavLink>
        <ul className="flex flex-wrap  items-center gap-y-2 gap-x-8">
         
          <li>
            <Popover placement="bottom">
            <PopoverHandler>
              <button
                 className=" transition-colors text-goldenrod hover:text-green-500 focus:text-green-500"

              >Dev Team</button>
            </PopoverHandler>
            <PopoverContent className="w-72">
              
              <List className="p-0">
                
                <a href="#" className="text-initial">
                  <ListItem>
                    <ListItemPrefix>
                      <UserCircleIcon className="w-5 h-5" />
                    </ListItemPrefix>
                    Howard Kaira
                  </ListItem>
                </a>
               
                <a href="#" className="text-initial">
                  <ListItem>
                    <ListItemPrefix>
                      <UserCircleIcon className="w-5 h-5" />
                    </ListItemPrefix>
                    Jimmy Maloya
                  </ListItem>
                </a>
                <a href="#" className="text-initial">
                  <ListItem>
                    <ListItemPrefix>
                      <UserCircleIcon className="w-5 h-5" />
                    </ListItemPrefix>
                    Dalitso Chongwe
                  </ListItem>
                </a>
                <a href="#" className="text-initial">
                  <ListItem>
                    <ListItemPrefix>
                      <UserCircleIcon className="w-5 h-5" />
                    </ListItemPrefix>
                    Emma Limbe
                  </ListItem>
                </a>
              </List>
            </PopoverContent>
          </Popover>
          </li>

         
          <li>
          <Popover  placement="bottom">
            <PopoverHandler>
              <button
                className=" transition-colors text-goldenrod hover:text-green-500 focus:text-green-500"

              >Contact Uchikumbe</button>
            </PopoverHandler>
            <PopoverContent className="w-72 bg-green-800  ">
              <div className="flex items-center gap-4 border-b border-blue-gray-50 pb-4 mb-4">
                <img src={logo} className="h-10 w-10" alt="Uchikumbe Logo" />
                <div>
                  <Typography variant="h6" className="text-white" >Uchikumbe</Typography>
                </div>
              </div>
              <List className="p-0">
                
                
                <a href="#" className="text-initial">
                  <ListItem className="text-white">
                    <ListItemPrefix>
                      <EnvelopeIcon className="w-5 text-white h-5" />
                    </ListItemPrefix >
                    uchikumbe@gmail.com
                  </ListItem>
                </a>
              </List>
            </PopoverContent>
          </Popover>
          
          </li>
        </ul>
      </div>
      <hr className="my-8 border-goldenrod" />
      <Typography color="green" className="text-center  font-normal">
        &copy; Uchikumbe 2023.
      </Typography>
    </footer>
  );
}
