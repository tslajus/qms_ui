import { fetchData, constants } from "@/utils";

const { TEMP_BASE_URL, DISPLAY_BOARD_URL } = constants;
const BASE_URL = import.meta.env.VITE_BASE_URL || TEMP_BASE_URL;
const URL = `${BASE_URL}${DISPLAY_BOARD_URL}/visits`;

const fetchVisits = async () => {
  return await fetchData({
    method: "GET",
    url: URL,
  });
};

export default fetchVisits;
