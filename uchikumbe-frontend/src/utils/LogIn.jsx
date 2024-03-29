import React from 'react'
import logo from "../assets/logo.svg"
import SignUp from './SignUp';
import { 
  CardHeader,
  Card,
  Typography,
  Input,
  Button,
  Dialog} from '@material-tailwind/react'


const handleInsideClick = (e) => {
  e.stopPropagation();
};
function LogIn() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  return (
    <Card onClick={handleInsideClick} className="w-full m-3 max-w-[18rem]">
      <CardHeader 
        floated={false}
        shadow={false}
        className="m-0 grid bg-green-900 place-items-center rounded-b-none py-8 px-4 text-center">
        <img src={logo} alt="Uchikumbe Logo" className="h-12"/>
        <Typography variant="h4" color="white">
          Uchikumbe
        </Typography>
      </CardHeader>
      <div className="mt-2 mb-2 m-3 place-items-center text-center ">
        <Typography variant="h4" className="text-green-900">
            Login
        </Typography>        
      </div>   
      <form className="mt-2 mb-2 m-3 place-items-center
       text-center max-w-[16rem]  sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input color="green" size="lg" label="Name" />
          <Input color="green" type="password" size="lg" label="Password" />
        </div>
        <Button className="mt-6 bg-green-900" fullWidth>
          Login
        </Button>
        <Dialog
              size="md"
              open={open}
              handler={handleOpen}
              className="bg-transparent shadow-none"
            >
            <SignUp />
            </Dialog>
        <Typography color="gray" variant="small" className="mt-2 text-center font-normal">
          Don't have an account yet?{" "}
          <a
            href="#"
            className="font-medium text-green-900 transition-colors hover:text-green-500"
            onClick={handleOpen}
          >
            Sign Up
          </a>
        </Typography>
      </form>
    </Card>
  )
};
 export default LogIn;