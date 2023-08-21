const formatTime = (time: TimeLeft): string => {
  const { days, hours, minutes } = time;
  const parts: string[] = [];

  const isTimePassed = days < 0 || hours < 0 || minutes < 0;
  const absoluteDays = Math.abs(days);
  const absoluteHours = Math.abs(hours);
  const absoluteMinutes = Math.abs(minutes);

  if (absoluteDays > 0) {
    parts.push(`${absoluteDays} ${absoluteDays === 1 ? "day" : "days"}`);
  }
  if (absoluteHours > 0) {
    parts.push(`${absoluteHours} ${absoluteHours === 1 ? "hour" : "hours"}`);
  }
  if (absoluteMinutes > 0 || parts.length === 0) {
    parts.push(
      `${absoluteMinutes} ${absoluteMinutes === 1 ? "minute" : "minutes"}`
    );
  }

  const timeStr = parts.join(", ");
  return `${isTimePassed ? "Your visit is" : ""} ${timeStr} ${
    isTimePassed ? "late" : "left"
  }`;
};

export default formatTime;
