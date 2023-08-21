import { fetchData, constants } from "@/utils";

const { TEMP_BASE_URL, SPECIALISTS_URL } = constants;
const BASE_URL = import.meta.env.VITE_BASE_URL || TEMP_BASE_URL;
const URL = `${BASE_URL}${SPECIALISTS_URL}/login`;

const selectOutOfOrderVisit = async (username: string, password: string) => {
  return await fetchData({
    method: "POST",
    url: URL,
    data: { username, password },
  });
};

export default selectOutOfOrderVisit;
