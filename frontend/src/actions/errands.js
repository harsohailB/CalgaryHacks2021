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
      "getAvailableErrandsForQuester failed with error code " + response.status
    );
  }

  return response.data.errands;
};

export const getInProgressErrandsForQuester = async (userId) => {
  const body = { questerId: userId, status: "IN_PROGRESS" };

  const response = await axios.get("/api/errands/quester", { params: body });

  if (response.status !== 200) {
    throw (
      "getAvailableErrandsForQuester failed with error code " + response.status
    );
  }

  return response.data.errands;
};

export const getCompletedErrandsForQuester = async (userId) => {
  const body = { questerId: userId, status: "COMPLETED" };

  const response = await axios.get("/api/errands/quester", { params: body });

  if (response.status !== 200) {
    throw (
      "getAvailableErrandsForQuester failed with error code " + response.status
    );
  }

  return response.data.errands;
};

export const questerApplyForErrand = async ({ questerId, errandId }) => {
  const body = { questerId, errandId };

  const response = await axios.post("/api/errands/quester/apply", { ...body });

  if (response.status !== 200) {
    throw "questerAcceptErrand failed with error code " + response.status;
  }

  return response.data;
};

export const questerMoveErrandToInProgress = async (errandId) => {
  const body = { errandId };

  const response = await axios.post("/api/errands/quester/in_progress", {
    ...body,
  });

  if (response.status !== 200) {
    throw "questerStageErrand failed with error code " + response.status;
  }

  return response.data;
};

export const questerMoveErrandToComplete = async (errandId) => {
  const body = { errandId };

  const response = await axios.post("/api/errands/quester/complete", {
    ...body,
  });

  if (response.status !== 200) {
    throw "questerStageErrand failed with error code " + response.status;
  }

  return response.data;
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

export const posterAcceptQuesterForErrand = async (applicationId) => {
  const body = { applicationId };

  const response = await axios.post("/api/errands/poster/accept", { ...body });

  if (response.status !== 200) {
    throw (
      "posterAcceptQuesterForErrand failed with error code " + response.status
    );
  }

  return response.data;
};
