import { fetchData, constants } from "@/utils";

const { TEMP_BASE_URL, RESERVATIONS_URL } = constants;
const BASE_URL = import.meta.env.VITE_BASE_URL || TEMP_BASE_URL;
const URL = (reservationCode: string) =>
  `${BASE_URL}${RESERVATIONS_URL}/cancel/${reservationCode}`;

const cancelVisit = async (reservationCode: string) => {
  return await fetchData({
    method: "PATCH",
    url: URL(reservationCode),
  });
};

export default cancelVisit;
