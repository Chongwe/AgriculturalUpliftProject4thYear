import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
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
    <div className="max-w-md p-4 min-w-96 rounded-2xl bg-green-100 mx-auto mt-10">
      <div className="mb-4 border-b border-green-300">
        <h1 className="text-4xl text-green-900">Create a post</h1>
        <p className="text-green-900 mb-2 mt-8">
          Write something to post. An image is optional
        </p>
      </div>
      <div>
        <textarea
          value={text}
          onChange={handleTextChange}
          placeholder="Write something here..."
          className="w-full p-2 border border-gray-300 min-h-16 focus:outline-none rounded-xl mb-4"
        />
      </div>

      <div className="max-w-md mx-auto mt-10">
        <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-4">
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt="Selected"
              className="w-full"
            />
          ) : (
            <div className="flex flex-col items-center justify-center">
              <svg
                className="w-12 h-12 text-gray-400 mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
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
            className="mt-4 w-full inline-flex items-center justify-center bg-gray-200 text-gray-700 font-medium rounded-lg shadow-sm cursor-pointer hover:bg-gray-300 focus:bg-gray-300 focus:outline-none transition duration-150 ease-in-out"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <span>Choose a file</span>
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
