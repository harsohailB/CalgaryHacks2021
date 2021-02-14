import axios from "axios";

export const getDirections = async (fromLat, fromLong, toLat, toLong) => {
  const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
  const url = `https://api.mapbox.com/v4/directions/mapbox.driving/${fromLong},${fromLat};${toLong},${toLat}.json?access_token=${MAPBOX_TOKEN}`;

  const response = await axios.get(url);

  if (response.status !== 200) {
    throw "getDirections failed with error code " + response.status;
  }

  // update store with user info if successfully registered
  return response.data;
};
