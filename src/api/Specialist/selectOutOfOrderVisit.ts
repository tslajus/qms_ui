import { fetchData, constants } from "@/utils";

const { TEMP_BASE_URL, SPECIALISTS_URL } = constants;
const BASE_URL = import.meta.env.VITE_BASE_URL || TEMP_BASE_URL;
const URL = (id: string) => `${BASE_URL}${SPECIALISTS_URL}/${id}/select-visit`;

const selectOutOfOrderVisit = async (
  id: string,
  reservationCode: string,
  token: string
) => {
  return await fetchData({
    method: "PATCH",
    url: URL(id),
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: { reservationCode },
  });
};

export default selectOutOfOrderVisit;
