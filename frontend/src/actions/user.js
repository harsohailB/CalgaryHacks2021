import axios from "axios";
import config from "../config";

export const addUser = async (username, email, password) => {
  const body = { username, email, password };

  // register user to database
  const response = await axios.post(config.endpoint + "users", { ...body });

  if (response.status !== 200) {
    throw "Registration failed with error code " + response.status;
  }

  // update store with user info if successfully registered
  return { user: response.data, type: LOGIN_USER };
};

export const loginUser = async (username, password) => {
  const body = { username, password };

  // register user to database
  const response = await axios.get(config.endpoint + "auth", {
    params: body,
  });

  if (response.status !== 200) {
    throw "Login failed with error code " + response.status;
  }

  return { user: response.data, type: LOGIN_USER };
};
