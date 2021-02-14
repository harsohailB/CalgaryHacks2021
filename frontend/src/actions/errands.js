import axios from "axios";

// QUESTER ERRANDS

export const getAvailableErrandsForQuester = async (userId) => {
  const body = { questerId: userId, status: "AVAILABLE" };

  const response = await axios.get("/api/errands/quester", { params: body });

  if (response.status !== 200) {
    throw (
      "getAvailableErrandsForQuester failed with error code " + response.status
    );
  }

  return response.data.errands;
};

export const getAcceptedErrandsForQuester = async (userId) => {
  const body = { questerId: userId, status: "ACCEPTED" };

  const response = await axios.get("/api/errands/quester", { params: body });

  if (response.status !== 200) {
    throw (
      "getAcceptedErrandsForQuester failed with error code " + response.status
    );
  }

  return response.data.errands;
};

// POSTER ERRANDS

export const getAvailableErrandsForPoster = async (userId) => {
  const body = { posterId: userId, status: "AVAILABLE" };

  const response = await axios.get("/api/errands/poster", { params: body });

  if (response.status !== 200) {
    throw (
      "getAvailableErrandsForQuester failed with error code " + response.status
    );
  }

  return response.data.errands;
};

export const getAcceptedErrandsForPoster = async (userId) => {
  const body = { posterId: userId, status: "ACCEPTED" };

  const response = await axios.get("/api/errands/poster", { params: body });

  if (response.status !== 200) {
    throw (
      "getAcceptedErrandsForPoster failed with error code " + response.status
    );
  }

  return response.data.errands;
};
