import React from "@material-tailwind/react";
import avatar from "../assets/avatar.png";
import { Avatar } from "@material-tailwind/react";

function JoinedGroups(props){
    return(
      
        <div className="bg-white min-w-[300px] rounded-lg p-2">
            
            <div className="  ">
                <div className="flex items-center my-2 space-x-4 border-b border-grey-500">
                    <Avatar src={avatar} size="lg" className="mb-1 mr-2"/>
                    <div className="flex-1">
                        <h4 className="text-lg font-medium text-uchiGreen">{props.name}</h4>
                        <p className="text-sm mb-1 text-goldenrod">{props.members}</p>
                    </div>
                    
                </div>
            </div>
       </div>
    )
}
 
export default JoinedGroups