import { fetchData, constants } from "@/utils";

const { TEMP_BASE_URL, RESERVATIONS_URL } = constants;
const BASE_URL = import.meta.env.VITE_BASE_URL || TEMP_BASE_URL;
const URL = `${BASE_URL}${RESERVATIONS_URL}/reserve`;

const reserveVisit = async () => {
  return await fetchData({
    method: "POST",
    url: URL,
  });
};

export default reserveVisit;
