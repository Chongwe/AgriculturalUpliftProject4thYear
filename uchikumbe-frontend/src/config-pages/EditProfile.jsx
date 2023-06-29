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

        
        <div className=" p-4 lg:flex-row shadow-lg rounded-3xl my-4 min-w-screen-sm justify-center gap-24 lg:flex flex-col  mx-12 items-center"> 
            
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
                <form className="mt-8 mb-2 min-w-screen-sm max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col gap-6">
                        <input
                            placeholder="First Name"
                            type="text"
                            className="px-4 py-2 transition-all w-auto duration-500 flex hover:scale-95 border focus:outline-none  border-green-300 rounded-md"
                            required
                        />    
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="px-4 py-2 transition-all duration-500 hover:scale-95 border focus:outline-none  border-green-300 rounded-md"
                            required
                        />        

                        <select  
                        menuProps={{ className: "h-48" }} 
                        className="px-4 py-2 transition-all duration-500  border focus:outline-none  border-green-300 rounded-md"
                        >
                            <option>Select District</option>
                            {malawiDistricts.map((district) => (
                            <option key={district} value={district}>
                                {district}
                            </option>
                            ))}
                        </select>
                        <textarea
                            type="text"
                            placeholder="Tell us about yourself"
                            className="px-4 py-2 transition-all duration-500 hover:scale-95 border focus:outline-none  border-green-300 rounded-md"
                            required
                        /> 

                    </div>
                
                    <button
                        type="submit"
                        className="bg-green-500 transition-all duration-500 hover:scale-95 hover:bg-goldenrod py-2 px-4  text-white  rounded-xl w-full focus:outline-none"
                        >
                        Update Profile
                    </button>
                
                </form>
           
      
      </div>
    );
  }
  export default EditProfile