import jwt_decode from "jwt-decode";
import { client } from "../client";

export const createOrGetUser = async (response) => {
  const decoded = jwt_decode(response.credential);
  localStorage.setItem("user", JSON.stringify(decoded));
};
