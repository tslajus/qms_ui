import { constructReservationCode } from "..";

const handleReservationInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setFieldValue: React.Dispatch<React.SetStateAction<string>>,
  setCodeValue: React.Dispatch<React.SetStateAction<string | null>>
) => {
  const value = e.target.value;
  const reservationCode = constructReservationCode(value);
  setCodeValue(reservationCode);
  setFieldValue(value);
};

export default handleReservationInputChange;
