import { STATUS } from "@/utils/constants";
import { formatTimeLeft } from "@/utils";

const formatStatusMessage = (
  status: STATUS,
  timeLeft: TimeLeft | null
): JSX.Element => {
  const { ACTIVE, PENDING, CANCELED, COMPLETED } = STATUS;

  const formattedTimeLeft = timeLeft
    ? formatTimeLeft(timeLeft)
    : "unknown time";

  const pendingMessage = (
    <div>
      <div>{formattedTimeLeft}</div>
    </div>
  );
  const activeMessage = <div>`Visit is currently ${status}`</div>;
  const finishedMessage = <div>{`Your visit has been ${status}.`}</div>;

  return (
    <div>
      {status === PENDING && pendingMessage}
      {status === ACTIVE && activeMessage}
      {(status === COMPLETED || status === CANCELED) && finishedMessage}
    </div>
  );
};

export default formatStatusMessage;
