import { fetchData, constants } from "@/utils";

const { TEMP_BASE_URL, SPECIALISTS_URL } = constants;
const BASE_URL = import.meta.env.VITE_BASE_URL || TEMP_BASE_URL;
const URL = `${BASE_URL}${SPECIALISTS_URL}/info`;

const fetchPatients = async () => {
  return await fetchData({
    method: "GET",
    url: URL,
  });
};

export default fetchPatients;
