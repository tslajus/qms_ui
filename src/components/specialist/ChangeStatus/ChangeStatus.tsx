import { useState } from "react";
import { useAuth } from "@/contexts";
import { markVisitStatus } from "@/api";
import { STATUS } from "@/utils/constants";

import { Button } from "@/components";

import styles from "./ChangeStatus.module.scss";

type ChangeStatusProps = {
  reservationCode: string;
  status: STATUS;
  isReady: boolean;
  isActive?: boolean;
  isNext?: boolean;
};

function ChangeStatus({
  reservationCode,
  status,
  isReady,
  isActive,
  isNext,
}: ChangeStatusProps) {
  const { token, refetchAssignedVisits } = useAuth();

  const [loading, setLoading] = useState(false);

  const handleStatusChange = async (newStatus: STATUS) => {
    setLoading(true);
    try {
      await markVisitStatus(reservationCode, newStatus, token);
      refetchAssignedVisits();
    } catch (error) {
      console.error("Error changing visit status:", error);
    } finally {
      setLoading(false);
    }
  };

  const cancelButton = (
    <Button
      label="Cancel"
      onClick={() => handleStatusChange(STATUS.CANCELED)}
      disabled={loading || status === STATUS.CANCELED}
    />
  );

  const startButton = (
    <Button
      label="Start"
      onClick={() => handleStatusChange(STATUS.ACTIVE)}
      disabled={loading || !isReady}
    />
  );

  const completeButton = (
    <Button
      label="Complete"
      onClick={() => handleStatusChange(STATUS.COMPLETED)}
      disabled={loading || status === STATUS.COMPLETED}
    />
  );

  const isNextButtons = (
    <>
      {cancelButton}
      {startButton}
    </>
  );

  const renderedButtons = isActive
    ? completeButton
    : isNext
    ? isNextButtons
    : cancelButton;

  return <div className={styles.buttons}>{renderedButtons}</div>;
}
export default ChangeStatus;
