import axios from "axios";
import config from "../config";
import { LOGIN } from "../contexts/types";

export const addUser = async ({
  name,
  age,
  description,
  username,
  password,
}) => {
  const body = { name, age, description, username, password };

  // register user to database
  const response = await axios.post("/api/user", { ...body });

  if (response.status !== 200) {
    throw "Registration failed with error code " + response.status;
  }

  // update store with user info if successfully registered
  return { type: LOGIN, payload: response.data };
};

export const loginUser = async (username, password) => {
  const body = { username, password };

  // register user to database
  const response = await axios.get("/api/auth", { params: body });

  if (response.status !== 200) {
    throw "Login failed with error code " + response.status;
  }

  return { type: LOGIN, payload: response.data };
};

export const addReview = async (postTime, rating, bodya) => {
  const body = { postTime, rating, bodya, id};

  const response = await axios.post("api/errands/reviews", { ...body });

  if (response.status !== 200) {
    throw "Review failed with error code " + response.status;
  }

  // update store with user info if successfully registered
  return response.data;
};
