import axios from "axios";

const API_URL = "https://express-mongo-connection-sigma.vercel.app/api/users";

// Get all users
export const getUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data.users;
};
