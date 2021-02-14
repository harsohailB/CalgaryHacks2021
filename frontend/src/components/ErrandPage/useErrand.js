import { useQuery } from "react-query";
import axios from "axios";
import { useLocation } from "react-router-dom";

const useErrand = () => {
  const location = useLocation();
  const errandId = location.pathname.split("/").slice(-1).pop();
  const { isLoading, error, data } = useQuery("errand", async () => {
    return await axios.get("/api/errands", { params: { id: errandId } });
  });

  const errand = !isLoading && !error ? data.data : null;

  return { errand, error, isLoading };
};

export default useErrand;
