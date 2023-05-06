import {
  Card,
  div,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHistory,
  faMessage,
  faNoteSticky,
  faPlusCircle,
  faUserEdit,
} from "@fortawesome/free-solid-svg-icons";

export default function ProfileCard(props) {
  return (
    <NavLink to={props.link}>
      <div className="mt-6 border-green-100 hover:shadow-sm hover:bg-green-50 rounded-xl border shadow-xl  w-96">
        <div className="flex p-4 items-center gap-4 ">
            
            <FontAwesomeIcon size="2x" icon={props.icon} color="#A67D00" />
         
          <Typography variant="h5" color="blue-gray" className=" text-green-900 text-xl">
            {props.name}
          </Typography>
        </div>
      </div>
    </NavLink>
  );
}
