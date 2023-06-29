import React, { useContext, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import UserContext from "../Layout/UserContext";
import styles from "../index.css";

import { client } from "../client";
import Spinner from "./Spinner";
import { isPast } from "date-fns";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const { forumId } = useParams();
  const [fields, setFields] = useState();
  const [imageAsset, setImageAsset] = useState();
  const [wrongImageType, setWrongImageType] = useState(false);
  const user = useContext(UserContext);

  const navigate = useNavigate();

  const uploadImage = (e) => {
    const selectedFile = e.target.files[0];
    // uploading asset to sanity
    if (
      selectedFile.type === "image/png" ||
      selectedFile.type === "image/svg" ||
      selectedFile.type === "image/jpeg" ||
      selectedFile.type === "image/gif" ||
      selectedFile.type === "image/tiff"
    ) {
      setWrongImageType(false);
      setLoading(true);
      client.assets
        .upload("image", selectedFile, {
          contentType: selectedFile.type,
          filename: selectedFile.name,
        })
        .then((document) => {
          setImageAsset(document);
          setLoading(false);
        })
        .catch((error) => {
          console.log("Upload failed:", error.message);
        });
    } else {
      setLoading(false);
      setWrongImageType(true);
    }
  };

  const createPost = () => {
    if (title && content) {
      const doc = {
        _type: "post",
        _id: uuidv4(),
        title,
        content,
        userId: user._id,
        forumId: forumId,
        _key: uuidv4(),
        postedBy: {
          _type: "postedBy",
          _ref: user._id,
        },
        _createdAt: new Date().toISOString(),
      };

      if (imageAsset) {
        doc.image = {
          _type: "image",
          asset: {
            _type: "reference",
            _ref: imageAsset._id,
          },
        };
      }

      client
        .patch(forumId)
        .setIfMissing({ post: [] })
        .insert("after", "post[-1]", [doc])
        .commit()
        .then(() => {
          navigate(`/forum-page/${forumId}`);
        });
    } else {
      setFields(true);

      setTimeout(() => {
        setFields(false);
      }, 2000);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center mt-5 lg:h-4/5">
      <div className=" flex lg:flex-row flex-col justify-center items-center bg-white lg:p-5 p-3 lg:w-4/5  w-full">
        <div className="bg-green-50 p-3 flex flex-0.7 rounded-2xl w-full">
          <div className=" flex justify-center items-center overflow-hidden transition-all duration-500 hover:scale-95  bg-green-100 ease-in-out flex-col border-2  rounded-xl  border-green-200 hover:border-dotted p-3 w-full h-420">
            {loading && <Spinner />}
            {wrongImageType && <p>Wrong file type. Select another one</p>}
            {!imageAsset ? (
              <label>
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="flex flex-col justify-center items-center">
                    <p className="font-bold mt-6  text-green-400 text-6xl">
                      <AiOutlineCloudUpload />
                    </p>
                    <p className="text-green-400 text-3xl ">Click to upload</p>
                  </div>
                  <div className="">
                    <p className="mt-32 bg-green-50 text-sm p-4 rounded-md m-2 text-green-600">
                      Use high-quality JPG, JPEG, PNG, GIF or TIFF less than
                      20MB
                    </p>
                  </div>
                </div>
                <input
                  type="file"
                  name="upload-image"
                  onChange={uploadImage}
                  className="w-0 h-0"
                />
              </label>
            ) : (
              <div className="relative h-full">
                <img
                  src={imageAsset?.url}
                  alt="uploaded-pic"
                  className="h-full w-full"
                />
                <button
                  type="button"
                  className="absolute bottom-3 right-3 p-3  hover:scale-105 rounded-full bg-goldenrod text-xl cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out"
                  onClick={() => setImageAsset(null)}
                >
                  <MdDelete className="text-white" />
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-6 lg:pl-5 mt-5 w-full">
          {user && (
            <div className="flex gap-2 mt-2 mb-2 items-center bg-white rounded-lg ">
              <img
                src={user.image}
                className="w-10 h-10 rounded-full"
                alt="user-profile"
              />
              <p className="font-bold text-green-900">{user.userName}</p>
            </div>
          )}

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add title of your post"
            className="outline-none text-2xl sm:text-2xl placeholder-green-100 font-bold border-b-2 active:border-b-green-800 transition-all duration-500 hover:scale-95 border-green-200 p-2"
          />

          <textarea
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write content of your  post here"
            className="outline-none transition-all placeholder-green-100 active:border-b-green-800 duration-500 hover:scale-95 text-base sm:text-lg border-b-2 border-green-200 p-2"
          />

          <div className="flex flex-col">
            <div className="flex justify-end items-end mt-5">
              <button
                type="button"
                onClick={createPost}
                className="bg-green-900 hover:bg-goldenrod transition-all duration-500 hover:scale-95 text-white  p-2 rounded-xl w-28 outline-none"
              >
                Create Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreatePost;
