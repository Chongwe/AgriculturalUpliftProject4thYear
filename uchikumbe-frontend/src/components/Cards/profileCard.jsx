import {
  Card,
  div,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Represents a profile card component.
 *
 * @class
 * @param {Object} props - The component props.
 * @param {string} props.link - The link to navigate when the card is clicked.
 * @param {string} props.icon - The icon to display on the card.
 * @param {string} props.name - The name to display on the card.
 * @returns {JSX.Element} The rendered profile card component.
 */
export default function ProfileCard(props) {
  return (
    <Link to={props.link}>
      <div className="mt-6 border-green-100 hover:shadow-sm hover:bg-green-50 rounded-xl border shadow-xl  w-96">
        <div className="flex p-4 items-center gap-4 ">
          <FontAwesomeIcon size="2x" icon={props.icon} color="#A67D00" />

          <Typography
            variant="h5"
            color="blue-gray"
            className=" text-green-900 text-xl"
          >
            {props.name}
          </Typography>
        </div>
      </div>
    </Link>
  );
}
