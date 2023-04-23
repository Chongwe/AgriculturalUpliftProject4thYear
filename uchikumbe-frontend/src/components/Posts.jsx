

import {
    Card,
    CardHeader,
    CardBody,
    CardFotter,
    Typography,
    Tooltip,
    IconButton,
    Avatar

} from"@material-tailwind/react";

import Picture from "../assets/insect.jpg"
import Avata from "../assets/avatar.png"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Posts() {
    return (
        <Card className= "m-8 h-screen flex min-w-[300px] w-96"> 
            <CardHeader floated={false} className = "shadow-none h-15 min-h-auto">
                <div className="flex space-x-2">
                    <Avatar src={Avata} alt = "avatar" variant="circular"></Avatar>
                    <div className=" ">
                        <Typography color="blue-gray" className="mb-2 text-lg ">
                                Emma Limbe
                        </Typography>
                        <Typography color="gray" className="text-xs  " textGradient>
                                33m ago
                        </Typography>
                    </div>

                    <div className="justify-end mr-8">
                          <IconButton variant="text" >
                    <FontAwesomeIcon icon={faEnvelope} />
                    </IconButton>
                    </div>
                   
                </div>
               

            </CardHeader>
            <CardBody className="h-80 min-h-auto">
                <div>
                    <p>Lorem ip. Itaque lnam accusamus, ea repellat inventore facere quisquam sit?</p>
                    <img src={Picture} className="flex"/>
                </div>
            </CardBody>
        </Card>
    )
}



