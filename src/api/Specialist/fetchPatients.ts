import { fetchData, constants } from "@/utils";

const { TEMP_BASE_URL, SPECIALISTS_URL } = constants;
const BASE_URL = import.meta.env.VITE_BASE_URL || TEMP_BASE_URL;
const URL = (id: string) => `${BASE_URL}${SPECIALISTS_URL}/${id}/patients`;

const fetchPatients = async (id: string, token: string) => {
  return await fetchData({
    method: "GET",
    url: URL(id),
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default fetchPatients;
