import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import bcrypt from "bcryptjs";
import logo from "../assets/logo.svg";
import LogIn from "./LogIn";
import { client } from "../client";
import {
  CardHeader,
  Card,
  Typography,
  Input,
  Button,
  Dialog,
} from "@material-tailwind/react";

import { useNavigate } from "react-router-dom";
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
  // State variables
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [fields, setFields] = useState(false);

  // navigate
  const navigate = useNavigate();

  // creating temporary use name the user can change it to whatever they like
  const userName = `${firstName}.${lastName}`;

  // sign uo logic
  const createUser = () => {
    if (
      userName &&
      firstName &&
      lastName &&
      email &&
      password &&
      confirmPassword &&
      password === confirmPassword &&
      password.length >= 6
    ) {
      const saltRounds = 10;
      const hashedPassword = bcrypt.hashSync(password, saltRounds);
      const doc = {
        _id: uuidv4(),
        _type: "user",
        userName,
        firstName,
        lastName,
        email,
        password: hashedPassword,
      };
      client.createIfNotExists(doc).then(() => {
        navigate("/");
      });
    } else {
      // setFields(true);
    }
  };

  const [openLogin, setLoginOpen] = React.useState(false);
  const handleOpenLogin = () => setLoginOpen((cur) => !cur);

  return (
    <Card className="w-full m-3 max-w-[18rem]">
      <CardHeader
        floated={false}
        shadow={false}
        className="m-0 grid bg-green-900 place-items-center rounded-b-none py-8 px-4 text-center"
      >
        <img src={logo} alt="Uchikumbe Logo" className="h-12" />
        <Typography variant="h4" color="white">
          Uchikumbe
        </Typography>
      </CardHeader>

      <div className="mt-1 mb-2 m-3 place-items-center text-center ">
        <Typography variant="h4" className="text-green-900">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Sign In with your Gmail account
        </Typography>
          <GoogleLogin
                  onSuccess={(response) =>
                    createOrGetUser(response).then(() => {
                      navigate("/");
                    })
                  }
                  onError={() => {
                    console.log("Login Failed");
                  }}
                /> 

      </div>

      <form
        className="mt-1 mb-2 m-3 place-items-center
       text-center max-w-[16rem]  sm:w-96"
      >
       
      </form>
     
     
    </Card>
  );
};
export default SignUp;
