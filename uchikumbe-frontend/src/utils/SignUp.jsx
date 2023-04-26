import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
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
          Enter your details to register.
        </Typography>
      </div>

      <form
        className="mt-1 mb-2 m-3 place-items-center
       text-center max-w-[16rem]  sm:w-96"
      >
        <div className="mb-4 flex flex-col gap-6">
          <Input
            color="green"
            size="lg"
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            color="green"
            size="lg"
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            color="green"
            size="lg"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            color="green"
            type="password"
            size="lg"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            color="green"
            type="password"
            size="lg"
            label="Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {/* <Checkbox
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
        /> */}
        <Button className="mt-2 bg-green-900" fullWidth onClick={createUser}>
          Register
        </Button>

        <Dialog
          size="md"
          open={openLogin}
          handler={handleOpenLogin}
          className="bg-transparent shadow-none"
        >
          <LogIn />
        </Dialog>

        <Typography
          color="gray"
          variant="small"
          className="mt-2 text-center font-normal"
        >
          Already have an account?{" "}
          <a
            href="#"
            className="font-medium text-green-900 transition-colors hover:text-green-500"
            onClick={handleOpenLogin}
          >
            LogIn
          </a>
        </Typography>
      </form>
    </Card>
  );
};
export default SignUp;
