import axios from "axios";

// QUESTER ERRANDS

export const getAvailableErrandsForQuester = async (userId) => {
  const body = { questerId: "60289d135c35857b89d5eab4", status: "AVAILABLE" };

  const response = await axios.get("/api/errands/quester", { params: body });

  if (response.status !== 200) {
    throw (
      "getAvailableErrandsForQuester failed with error code " + response.status
    );
  }

  return response.data.errands;
};

export const getAcceptedErrandsForQuester = async (userId) => {
  const body = { questerId: "60289d135c35857b89d5eab4", status: "ACCEPTED" };

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
  const body = { posterId: "6028996eb2f064789c0230a4", status: "AVAILABLE" };

  const response = await axios.get("/api/errands/poster", { params: body });

  if (response.status !== 200) {
    throw (
      "getAvailableErrandsForQuester failed with error code " + response.status
    );
  }

  return response.data.errands;
};

export const getAcceptedErrandsForPoster = async (userId) => {
  const body = { posterId: "6028996eb2f064789c0230a4", status: "ACCEPTED" };

  const response = await axios.get("/api/errands/poster", { params: body });

  if (response.status !== 200) {
    throw (
      "getAcceptedErrandsForPoster failed with error code " + response.status
    );
  }

  return response.data.errands;
};
