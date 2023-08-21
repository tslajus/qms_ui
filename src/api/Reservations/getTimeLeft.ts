import { fetchData, constants } from "@/utils";

const { TEMP_BASE_URL, RESERVATIONS_URL } = constants;
const BASE_URL = import.meta.env.VITE_BASE_URL || TEMP_BASE_URL;
const URL = (reservationCode: string) =>
  `${BASE_URL}${RESERVATIONS_URL}/time-left/${reservationCode}`;

const getTimeLeft = async (reservationCode: string) => {
  return await fetchData({
    method: "GET",
    url: URL(reservationCode),
  });
};

export default getTimeLeft;
