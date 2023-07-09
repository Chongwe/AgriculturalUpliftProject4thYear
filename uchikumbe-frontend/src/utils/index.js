import jwt_decode from "jwt-decode";
import { client } from "../client";

/**
 * Create or get a user based on the provided response.
 *
 * @param {object} response - The response containing user credentials.
 * @returns {Promise<void>} - A promise that resolves when the user is created or retrieved.
 */
export const createOrGetUser = async (response) => {
  // Decode the JWT token from the response.
  const decoded = jwt_decode(response.credential);

  // Store the decoded user information in the local storage.
  localStorage.setItem("user", JSON.stringify(decoded));

  // Extract the relevant user details from the decoded token.
  const { name, sub, picture } = decoded;

  // Define the user document to be created or updated in the Sanity backend.
  const doc = {
    _id: sub,
    _type: "user",
    userName: name,
    image: picture,
    isAdmin: false,
  };

  // Create or update the user document in the Sanity backend using the Sanity client.
  await client.createIfNotExists(doc);
};
