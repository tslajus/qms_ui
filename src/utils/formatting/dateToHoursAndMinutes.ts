import { constants } from "@/utils";

const dateToHoursAndMinutes = (dateString: Date): string => {
  const { VISIT_TIME } = constants;
  const date = new Date(dateString);

  const startHours = date.getHours();
  const startMinutes = date.getMinutes();

  const end = new Date(date);
  end.setMinutes(startMinutes + VISIT_TIME);
  const endHours = end.getHours();
  const endMinutes = end.getMinutes();

  return `${String(startHours).padStart(2, "0")}:${String(
    startMinutes
  ).padStart(2, "0")} - ${String(endHours).padStart(2, "0")}:${String(
    endMinutes
  ).padStart(2, "0")}`;
};

export default dateToHoursAndMinutes;
