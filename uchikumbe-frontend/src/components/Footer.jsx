import { Typography } from "@material-tailwind/react";
import logo from "../assets/logo.svg"
import { NavLink } from "react-router-dom";
 
export default function Footer() {
  return (
    <footer className="w-full sm:max-w-screen-sm rounded-t-2xl bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
        <img src={logo} alt="Uchikumbe logo" className="w-12 text-center" />
        <ul className="flex flex-wrap  items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              href="#"
              color="gray"
              className=" transition-colors text-goldenrod hover:text-green-500 focus:text-green-500"
            >
              About Us
            </Typography>
          </li>
         
          <li>
            <Typography
              href="#"
              color="blue-gray"
              className="transition-colors text-goldenrod hover:text-green-500 focus:text-green-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <NavLink to="/contact"> 
              <Typography
                color="blue-gray"
                className=" transition-colors text-goldenrod hover:text-green-500 focus:text-green-500"
              >
                Contact Us
              </Typography>
            </NavLink>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-goldenrod" />
      <Typography color="green" className="text-center  font-normal">
        &copy; 2023 Uchikumbe Systems Inc.
      </Typography>
    </footer>
  );
}