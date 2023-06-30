import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import { client } from "../../../client";
import { userQuery } from "../../../utils/data";
import { useNavigate, useParams } from "react-router-dom";

const EditProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const navigate = useNavigate();
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const query = userQuery(userId);

    client.fetch(query).then((data) => {
      setUser(data[0]);
      setFirstName(data[0].firstName);
      setLastName(data[0].lastName);
      setLocation(data[0].location);
      setBio(data[0].bio);
    });
  }, [userId]);

  const updateProfile = () => {
    const doc = {
      _type: "user",
      _id: userId,
      bio: bio,
      location: location,
    };

    client
      .patch(userId)
      .set(doc) // Set the updated document data
      .commit()
      .then(() => {
        navigate(`/user-profile/${userId}`);
      })
      .catch((error) => {
        console.error("Error updating user data:", error);
        // Handle the error or show an error message
      });
  };

  const malawiDistricts = [
    "Balaka",
    "Blantyre",
    "Chikwawa",
    "Chiradzulu",
    "Chitipa",
    "Dedza",
    "Dowa",
    "Karonga",
    "Kasungu",
    "Likoma",
    "Lilongwe",
    "Machinga",
    "Mangochi",
    "Mchinji",
    "Mulanje",
    "Mwanza",
    "Mzimba",
    "Nkhata Bay",
    "Nkhotakota",
    "Nsanje",
    "Ntcheu",
    "Ntchisi",
    "Phalombe",
    "Rumphi",
    "Salima",
    "Thyolo",
    "Zomba",
  ];

  return (
    <div className="p-4 lg:flex-row shadow-lg rounded-3xl my-4 min-w-screen-sm justify-center gap-24 lg:flex flex-col mx-12 items-center">
      <div className="">
        <div className="flex flex-wrap gap-4">
          <FontAwesomeIcon
            icon={faUserEdit}
            className="text-goldenrod"
            size="2x"
          />
          <Typography variant="h4" className="text-goldenrod">
            Edit your profile
          </Typography>
        </div>
        <Typography color="gray" className="mt-1 text-green-900 font-normal">
          Update your profile information
        </Typography>
      </div>
      <form className="mt-8 mb-2 min-w-screen-sm max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
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
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            type="text"
            placeholder="Tell us about yourself"
            className="px-4 py-2 transition-all duration-500 hover:scale-95 border focus:outline-none  border-green-300 rounded-md"
            required
          />
        </div>

        <button
          onClick={updateProfile}
          type="submit"
          className="bg-green-500 transition-all duration-500 hover:scale-95 hover:bg-goldenrod py-2 px-4  text-white  rounded-xl w-full focus:outline-none"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
