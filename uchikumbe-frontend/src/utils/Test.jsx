import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
  } from "@material-tailwind/react";

  import SignUp from "./SignUp"
   
  export default function Test() {
    return (
      <Popover
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
      >
        <PopoverHandler>
          <Button variant="gradient">Show Popover</Button>
        </PopoverHandler>
        <PopoverContent>
            <SignUp/>
          This is a very beautiful popover, show some love.
        </PopoverContent>
      </Popover>
    );
  }