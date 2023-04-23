import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
   
  export default function  Sidebar() {
    return (
      <Card className="w-50 bg-light-green-700">
<<<<<<< Updated upstream
        <CardHeader floated={false} className="h-80">
=======
        <CardHeader floated={false} className="h-50">
>>>>>>> Stashed changes
          
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="white" className="mb-2">
            Natalie Paisley
          </Typography>
          <Typography color="blue" className="font-medium" textGradient>
            CEO / Co-Founder
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content="Like">
            
              <i className="fab fa-facebook" />
            
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              as="a"
              href="#twitter"
              variant="lead"
              color="light-blue"
              textGradient
            >
              <i className="fab fa-twitter" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              as="a"
              href="#instagram"
              variant="lead"
              color="purple"
              textGradient
            >
              <i className="fab fa-instagram" />
            </Typography>
          </Tooltip>
        </CardFooter>
      </Card>
    );
  }