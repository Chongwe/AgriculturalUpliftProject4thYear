import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import logo from "../assets/logo.svg";
import { CardHeader, Card, Typography } from "@material-tailwind/react";
import { createOrGetUser } from ".";

/*
  This is the sign up logic for sanity client we are sending the user credentials to our sanity database where
  a unique user is being generate off of a user password combination 

  One issue is the fact that the uuidv4 generates a unique idenitifier each time meaning that the same email address can be registered 
  multiple time 

  possible solutions is swithcing completely to google sign in and sign up with google this way we can use the unique sub as the 
  users ID that way each account will have one unique email address leading a reduced redundency on users 
  
  this change will be implemented soon there after 
  and will lead to the merging of the signup an sign in page as simply login page component 
*/
const SignUp = () => {
  return (
    <Card className="w-full m-3 shadow-lg max-w-[15rem]">
      <CardHeader
        floated={false}
        shadow={false}
        className="m-0 grid bg-green-900 border-b-4 border-goldenrod  place-items-center rounded-b-none py-8 px-4 text-center"
      >
        <img src={logo} alt="Uchikumbe Logo" className="h-12" />
        <Typography variant="h4" color="white">
          Uchikumbe
        </Typography>
      </CardHeader>

      <div className="mt-1 mb-2 m-3 place-items-center justify-center text-center ">
        <div className=" rounded-lg m-2 bg-green-50 p-2">
          <Typography variant="h4" className="text-green-900 ">
            Sign Up
          </Typography>
          <Typography className="mt-1 ">
            Sign In with your Gmail account
          </Typography>
          <Typography className="mt-1  bg-green-100 rounded-md p-2 text-goldenrod text-xs">
            Only use accounts that end with *@gmail.com
          </Typography>
        </div>
        <div className="justify-center items-center">
          <GoogleLogin
            className="justify-center"
            onSuccess={(response) =>
              createOrGetUser(response).then(() => {
                window.location.reload();
              })
            }
            onError={() => {
              // console.log("Login Failed");
            }}
          />
        </div>
      </div>

      <form
        className="mt-1 mb-2 m-3 place-items-center
       text-center max-w-[16rem]  sm:w-96"
      ></form>
    </Card>
  );
};
export default SignUp;
