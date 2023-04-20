import React from 'react'
import logo from "../assets/logo.svg"
import { 
  CardHeader,
  Card,
  Typography,
  Input,
  Button,
  Checkbox

} from '@material-tailwind/react'


function Login() {
  return (
    <Card className="w-full m-3 max-w-[18rem]">
      <CardHeader 
        floated={false}
        shadow={false}
        className="m-0 grid bg-green-900 place-items-center rounded-b-none py-8 px-4 text-center">

          <img src={logo} alt="Uchikumbe Logo" className="h-12"/>
        <Typography variant="h4" color="white">
          Uchikumbe
        </Typography>
      </CardHeader>

      <div className="mt-8 mb-2 m-3 place-items-center text-center ">
         <Typography variant="h4" className="text-green-900">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Enter your details to register.
          </Typography>
      </div>
      
      <form className="mt-8 mb-2 m-3 place-items-center
       text-center max-w-[16rem]  sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input color="green" size="lg" label="Name" />
          <Input color="green" size="lg" label="Email" />
          <Input color="green" type="password" size="lg" label="Password" />
        </div>
        <Checkbox
        color='green'
          label={
            (
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-green-500"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            )
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6 bg-green-900" fullWidth>
          Register
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a
            href="#"
            className="font-medium text-green-900 transition-colors hover:text-green-500"
          >
            Login
          </a>
        </Typography>
      </form>


    </Card>
  )
};
 export default Login;