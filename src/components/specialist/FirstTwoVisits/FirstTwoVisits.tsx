import { useAuth } from "@/contexts";
import { constants } from "@/utils";

import { SingleVisitCard } from "@/components";

import styles from "./FirstTwoVisits.module.scss";

function FirstTwoVisits() {
  const { STATUS } = constants;
  const { ACTIVE } = STATUS;
  const { assignedVisits } = useAuth();

  let activeVisit = null;
  let nextVisit = null;

  if (assignedVisits.length > 0) {
    if (assignedVisits[0].status === ACTIVE) {
      activeVisit = assignedVisits[0];
      nextVisit = assignedVisits.length > 1 ? assignedVisits[1] : null;
    } else {
      nextVisit = assignedVisits[0];
    }
  }
  const activeVisitCard = (
    <div className={styles["visits__container"]}>
      <div className={styles["visits__status"]}>Active</div>
      {activeVisit ? (
        <SingleVisitCard
          key={activeVisit._id}
          serialNumber={activeVisit.visibleCode}
          estimatedTime={activeVisit.visitTime}
          status={activeVisit.status}
          reservationCode={activeVisit.reservationCode}
          isActive
        />
      ) : (
        <SingleVisitCard isActive />
      )}
    </div>
  );

  const nextVisitCard = (
    <div className={styles["visits__container"]}>
      <div className={styles["visits__status"]}>Next</div>

      {nextVisit ? (
        <SingleVisitCard
          key={nextVisit._id}
          serialNumber={nextVisit.visibleCode}
          estimatedTime={nextVisit.visitTime}
          status={nextVisit.status}
          reservationCode={nextVisit.reservationCode}
          hasPriority={nextVisit.priority}
          isReady={!activeVisit}
          isNext
        />
      ) : (
        <SingleVisitCard isNext />
      )}
    </div>
  );

  return (
    <div className={styles.visits}>
      {activeVisitCard}
      {nextVisitCard}
    </div>
  );
}

export default FirstTwoVisits;
