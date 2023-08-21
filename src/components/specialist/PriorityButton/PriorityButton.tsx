import { useState } from "react";
import { useAuth } from "@/contexts";
import { selectOutOfOrderVisit } from "@/api";

import { Button } from "@/components";

function PriorityButton({ reservationCode }: { reservationCode: string }) {
  const { specialistId, token, refetchAssignedVisits } = useAuth();
  const [loading, setLoading] = useState(false);

  const handlePriorityClick = async () => {
    setLoading(true);
    try {
      await selectOutOfOrderVisit(specialistId, reservationCode, token);
      refetchAssignedVisits();
    } catch (error) {
      console.error("Error moving visit to the top:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      label="Give Priority"
      onClick={handlePriorityClick}
      disabled={loading}
    />
  );
}

export default PriorityButton;
