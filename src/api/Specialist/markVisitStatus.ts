import { STATUS } from "@/utils/constants";
import { constants, fetchData } from "@/utils";

const { TEMP_BASE_URL, SPECIALISTS_URL } = constants;
const BASE_URL = import.meta.env.VITE_BASE_URL || TEMP_BASE_URL;
const URL = (reservationCode: string) =>
  `${BASE_URL}${SPECIALISTS_URL}/mark-visit/${reservationCode}`;

const markVisitStatus = async (
  reservationCode: string,
  status: STATUS,
  token: string
) => {
  return await fetchData({
    method: "PATCH",
    url: URL(reservationCode),
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: { status: status },
  });
};

export default markVisitStatus;
