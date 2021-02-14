import axios from "axios";

export const getAvailableErrandsForQuester = async (userId) => {
  const body = { questerId: userId, status: "ACCEPTED" };

  const response = await axios.get("/api/errands/quester", { params: body });

  if (response.status !== 200) {
    throw (
      "getAvailableErrandsForQuester failed with error code " + response.status
    );
  }

  return response.data;
};
