import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Card,
    Input,
    Button,
    Typography,
    Textarea,
    Select,
    Option
  } from "@material-tailwind/react";
  import {React, useState } from 'react';

  

   
  function EditProfile() {


    
  const malawiDistricts = [
    'Balaka',
    'Blantyre',
    'Chikwawa',
    'Chiradzulu',
    'Chitipa',
    'Dedza',
    'Dowa',
    'Karonga',
    'Kasungu',
    'Likoma',
    'Lilongwe',
    'Machinga',
    'Mangochi',
    'Mchinji',
    'Mulanje',
    'Mwanza',
    'Mzimba',
    'Nkhata Bay',
    'Nkhotakota',
    'Nsanje',
    'Ntcheu',
    'Ntchisi',
    'Phalombe',
    'Rumphi',
    'Salima',
    'Thyolo',
    'Zomba'
  ];
  
 
    return (

        
        <div className=" p-4 lg:flex-row shadow-lg rounded-3xl my-4 min-w-[400px] justify-center gap-24 lg:flex flex-col  mx-12 items-center"> 
            
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
                        <Select color="green" menuProps={{ className: "h-48" }} label="Select District">
                            {malawiDistricts.map((district) => (
                            <Option key={district} value={district}>
                                {district}
                            </Option>
                            ))}
                        </Select>
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