import React from "@material-tailwind/react";
import avatar from "../assets/avatar.png";
import { Avatar } from "@material-tailwind/react";
import {
  Button,
} from "@material-tailwind/react";


function Group(props){
    return(
      
        <div className="bg-white min-w-[900px] rounded-lg p-2">
            <div className="flex items-center justify-between mb-2">
            </div>
            <div className=" px-40 ">
                <div className="flex items-center my-2 space-x-4 border-b border-grey-500">
                    <Avatar src={avatar} size="lg" className="mb-1"/>
                    <div className="flex-1">
                        <h4 className="text-lg font-medium text-uchiGreen">{props.name}</h4>
                        <p className="text-sm mb-1 text-goldenrod">{props.members}</p>
                    </div>
                    <div className=" flex items-center ml-auto">
                        <Button color="green">Join</Button>
                    </div>
                </div>
            </div>
       </div>
    )
}
 
export default Group