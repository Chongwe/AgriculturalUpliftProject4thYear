import React from 'react'
import { NavLink } from 'react-router-dom'
import {Typography,} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  HomeIcon,
  NewspaperIcon,
  UserCircleIcon,
  UserGroupIcon,
  Square2StackIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

export default function NavLinks() {
  return (
    <div>
    <ul className=" flex gap-10 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-20">
      <Typography
        as="li"
        variant="small"
        className="mt-1 font-normal"
      >
        <NavLink to="/" className="flex gap-1 hover:text-green-100 transition-all duration-200 hover:scale-105  focus:border-b-2 focus:border-white focus:text-white" > 
       <HomeIcon className='h-5 w-5'/>
        Home </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="mt-1 font-normal"
      >
        <NavLink to="people" className="flex gap-1 hover:text-green-100 transition-all duration-200 hover:scale-105 focus:border-b-2 focus:border-white focus:text-white" > 
       <UserCircleIcon className='h-5 w-5' />
        People </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="mt-1 font-normal"
      >
        <NavLink to="news" className="flex gap-1 hover:text-green-100 transition-all duration-200 hover:scale-105 focus:border-b-2 focus:border-white focus:text-white" > 
        <NewspaperIcon className='h-5 w-5'/>
        News </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="mt-1 font-normal"
      >
        <NavLink to="forum" className="flex gap-1 hover:text-green-100 transition-all duration-200 hover:scale-105 focus:border-b-2 focus:border-white focus:text-white" > 
        <UserGroupIcon className='h-5 w-5'/>
        Forum </NavLink>
      </Typography>

      <Typography
        as="li"
        variant="small"
        className="mt-1 font-normal"
      >
        <NavLink to="Tools" className="flex gap-1 hover:text-green-100 transition-all duration-200 hover:scale-105 focus:border-b-2 focus:border-white focus:text-white" > 
        <Square2StackIcon className='h-5 w-5'/>
        Tools </NavLink>
      </Typography>
    </ul>
    </div>
  )
}
