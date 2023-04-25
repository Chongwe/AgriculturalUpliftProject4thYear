import React from 'react'
import { NavLink } from 'react-router-dom'
import {Typography,} from "@material-tailwind/react";

export default function NavLinks() {
  return (
    <div>
    <ul className=" flex gap-10 lg:mb-0 lg:mt-0  lg:flex-row lg:items-center lg:gap-20">
      <Typography
        as="li"
        variant="small"
        className="mt-1 font-normal"
      >
        <NavLink to="/" className="flex  hover:text-green-100 focus:border-b-2 focus:border-white focus:text-white" > 
        Home </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="mt-1 font-normal"
      >
        <NavLink to="people" className="flex  hover:text-green-100 focus:border-b-2 focus:border-white focus:text-white" > 
        People </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="mt-1 font-normal"
      >
        <NavLink to="news" className="flex  hover:text-green-100 focus:border-b-2 focus:border-white focus:text-white" > 
        News </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="mt-1 font-normal"
      >
        <NavLink to="forum" className="flex  hover:text-green-100 focus:border-b-2 focus:border-white focus:text-white" > 
        Forum </NavLink>
      </Typography>
    </ul>
    </div>
  )
}
