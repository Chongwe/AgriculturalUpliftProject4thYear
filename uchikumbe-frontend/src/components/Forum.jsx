import React from 'react';
import  Group from "./Group"
import JoinedGroups from './JoinedGroups';
import { NavLink } from 'react-router-dom';

const Forum = () => {
  return (
    <div className=''>
      <div className="m-4 text-center ">
        <NavLink to="/edit-profile"> 
        <button class=" bg-green-500 hover:bg-goldenrod py-2 justify-center px-4 ml-4  text-white  rounded-full focus:outline-none">
          Create a Forum
        </button>
        <hr className="my-4 border-goldenrod" />
        </NavLink>
      </div>
      
     <div className="p-4 lg:flex-row  justify-center gap-24 lg:flex flex-col mx-12 ">
      
        <div className="  max-w-[500px] w-[600px] items-center p-4 bg-green-50 rounded-xl ">
            <h1 className="text-4xl mb-4  text-green-900">Your Forums</h1>
            <hr className="my-4 border-green-500 border-1" />

            <JoinedGroups name ="Maize Pests " members ="70 Member"/>
            <JoinedGroups name ="Maize Pests " members ="70 Member"/>
            <JoinedGroups name ="Maize Pests " members ="70 Member"/>
            <JoinedGroups name ="Maize Pests " members ="70 Member"/>
            <JoinedGroups name ="Maize Pests " members ="70 Member"/>
            <JoinedGroups name ="Maize Pests " members ="70 Member"/>
        </div>
        
          <div className='p-4'>
            <h1 className="text-4xl mb-4  text-green-900">Other Forums</h1>
            <hr className="my-4 border-green-500 border-1" />
            <div className="  max-w-[500px] rounded-xl">
              <Group name ="Maize Pests " members ="70 Member"/>
              <Group name ="Chicken Feed " members ="70 Member"/>
              <Group name ="Foot and Mouth disease (Cattle) " members ="70 Member"/>
              <Group name ="Maize Pests " members ="70 Member"/>
              <Group name ="Maize Pests " members ="70 Member"/>
              <Group name ="Maize Pests " members ="70 Member"/>
            </div>
        </div>

    </div>
    </div>
   
  );
};

export default Forum;