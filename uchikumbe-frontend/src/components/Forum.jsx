import React from 'react';
import  Group from "./Group"
import JoinedGroups from './JoinedGroups';
const Forum = () => {
  return (
    <div className=''>
      <div className='m-4 justify-end'>
        <button class=" bg-green-500 hover:bg-goldenrod py-2  px-4 ml-4  text-white  rounded-full focus:outline-none">
          Create a Group
        </button>
      </div>
     <div className="p-4 gap-2 flex ">
      
        <div className="flex-wrap  min-w-[300px] w-96 justify-center  flex rounded-xl ">
            <h1 className="text-4xl  text-green-900">Your Groups</h1>

            <JoinedGroups name ="Maize Pests " members ="70 Member"/>
            <JoinedGroups name ="Maize Pests " members ="70 Member"/>
            <JoinedGroups name ="Maize Pests " members ="70 Member"/>
            <JoinedGroups name ="Maize Pests " members ="70 Member"/>
            <JoinedGroups name ="Maize Pests " members ="70 Member"/>
            <JoinedGroups name ="Maize Pests " members ="70 Member"/>
        </div>
        
          <div>
            <h1 className="text-4xl  text-green-900">Other Groups</h1>
            <div className="flex-shrink w-1/4 min-w-auto   md:block rounded-xl">
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