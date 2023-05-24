import React, { useState } from "react";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function CreatePost() {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };
  return (
    <div className="max-w-md p-4 min-w-94 rounded-2xl bg-green-100 mx-auto mt-10">
      <div className="mb-4 border-b border-green-300">
        <h1 className="text-4xl text-green-900">Create a post</h1>
        <p className="text-goldenrod mb-2 mt-8">
          Title and Contents of the post are required
        </p>
      </div>
      <div className="flex flex-col gap-6 ">
      <Input color="green"  label="Title " />
      <Textarea color="green"  label="Write post Contents" />
       
      </div>

      <div className="max-w-md mx-auto mt-10">
        <div className="bg-green-50 border-gray-300 rounded-lg shadow-lg p-4">
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt="Selected"
              className="w-full"
            />
          ) : (
            <div className="flex flex-col items-center justify-center">
              <FontAwesomeIcon icon={faPlus}/>
              <p className="text-gray-400 text-sm">Select an image</p>
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            id="imageInput"
          />
          <label
            htmlFor="imageInput"
            className="mt-4 w-full inline-flex items-center justify-center bg-green-200 text-white font-medium rounded-lg shadow-sm cursor-pointer hover:bg-green-300 focus:bg-gray-300 focus:outline-none transition duration-150 ease-in-out"
          >
           <FontAwesomeIcon icon={faPlus}/>
            <span className="ml-2">Choose a file</span>
          </label>
        </div>
      </div>

      <Button fullWidth color="green" className="my-4">
        post
      </Button>
    </div>
  );
}

export default CreatePost;
