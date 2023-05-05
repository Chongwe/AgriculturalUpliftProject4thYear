import React from "@material-tailwind/react";
import avatar from "../assets/GIcon.png";
import { Avatar } from "@material-tailwind/react";
import {
  Button,
} from "@material-tailwind/react";


function Group(props){
    return(
      
        <div className="bg-white min-w-[500px] rounded-lg p-2">
           
            <div className="  ">
                <div className="flex my-2 justify-between space-x-4 border-b border-grey-500">
                    <div className="flex">                   
                        <Avatar src={avatar} size="lg" className="mb-1"/>
                        <div className="ml-4">
                            <h4 className="text-lg font-medium text-uchiGreen">{props.name}</h4>
                            <p className="text-sm mb-1 text-goldenrod">{props.members}</p>  
                        </div>
                        
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