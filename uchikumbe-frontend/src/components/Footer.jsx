import { Typography } from "@material-tailwind/react";
import logo from "../assets/logo.svg"
 
export default function Example() {
  return (
    <footer className="w-full rounded-t-2xl bg-image bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
        <img src={logo} alt="Uchikumbe logo" className="w-12 text-center" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="gray"
              className=" transition-colors hover:text-green-500 focus:text-green-500"
            >
              About Us
            </Typography>
          </li>
         
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="transition-colors hover:text-green-500 focus:text-green-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className=" transition-colors hover:text-green-500 focus:text-green-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-green-900" />
      <Typography color="green" className="text-center  font-normal">
        &copy; 2023 Uchikumbe Systems Inc.
      </Typography>
    </footer>
  );
}