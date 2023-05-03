import jwt_decode from "jwt-decode";
import { client } from "../client";

export const createOrGetUser = async (reponse) => {
  // console.log(reponse.credential
  const decoded = jwt_decode(reponse.credential);
  localStorage.setItem("user", JSON.stringify(decoded));
  const { name, sub, picture } = decoded;

  const doc = {
    _id: sub,
    _type: "user",
    userName: name,
    image: picture,
  };

  client.createIfNotExists(doc);

  // await axios.post('http://localhost:3000/api/auth', doc)
};
