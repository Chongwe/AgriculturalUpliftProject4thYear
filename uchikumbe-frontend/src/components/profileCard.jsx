import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
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
    <Link to={props.link}>
      <Card className="mt-6 w-96">
        <CardBody className="flex  gap-3 ">
          <Typography>
            <FontAwesomeIcon classname="h-10" icon={props.icon} />
          </Typography>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {props.name}
          </Typography>
        </CardBody>
      </Card>
    </Link>
  );
}
