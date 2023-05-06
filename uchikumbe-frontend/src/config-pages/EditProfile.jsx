import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Card,
    Input,
    Button,
    Typography,
    Textarea,
  } from "@material-tailwind/react";
   
  function EditProfile() {
    return (
        <div className=" p-4 lg:flex-row shadow-lg rounded-3xl mt-4 justify-center gap-24 lg:flex flex-col mx-12 items-center h-screen"> 
            
                <div className="">
                    <div className=" flex flex-wrap gap-4"> 
                        <FontAwesomeIcon icon={faUserEdit}  className="text-goldenrod " size="2x" /> 
                        <Typography variant="h4" className="text-goldenrod ">
                        Edit your profile
                        </Typography>
                    </div>
                    <Typography color="gray" className="mt-1 text-green-900 font-normal">
                    Update your profile information
                    </Typography> 
                </div>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
                    <Input size="lg" color="green" label="First Name" />
                    <Input size="lg" color="green" label="Last Name" />
                    <Input size="lg" color="green" label="District" />
                    <Textarea color="green" label="Tell us about yourself" />


                </div>
                
                <Button color="green" className="mt-6 rounded-full" fullWidth>
                    Update your data
                </Button>
                
                </form>
           
      
      </div>
    );
  }
  export default EditProfile