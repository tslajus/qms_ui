import { useAuth } from "@/contexts";

import { SingleVisitCard } from "@/components";
import { constants } from "@/utils";

import styles from "./AssignedVisits.module.scss";

function AssignedVisits() {
  const { STATUS } = constants;
  const { ACTIVE } = STATUS;
  const { assignedVisits } = useAuth();

  const firstVisit = assignedVisits[0];
  const visitsToRender =
    firstVisit?.status === ACTIVE
      ? assignedVisits.slice(2)
      : assignedVisits.slice(1);

  const areVisits = visitsToRender.length > 0;

  return (
    <div className={styles.visits}>
      <div className={styles["visits__heading"]}>
        {areVisits ? "Visits assigned" : "No visits assigned"}
      </div>
      {areVisits && (
        <div className={styles["visits__list"]}>
          {areVisits
            ? visitsToRender.map(
                ({
                  _id,
                  visibleCode,
                  visitTime,
                  status,
                  reservationCode,
                  priority,
                }) => (
                  <SingleVisitCard
                    key={_id}
                    serialNumber={visibleCode}
                    estimatedTime={visitTime}
                    status={status}
                    reservationCode={reservationCode}
                    hasPriority={priority}
                    hasPriorityButton
                  />
                )
              )
            : null}
        </div>
      )}
    </div>
  );
}

export default AssignedVisits;
