import { constants } from "@/utils";

import styles from "./VisitCard.module.scss";

function VisitCard({ visit }: { visit: Visit }) {
  const { STATUS } = constants;
  const { ACTIVE } = STATUS;

  const visitStatus = visit.status;
  const visibleCode = visit.visibleCode;
  const direction = visitStatus === ACTIVE ? ` → ${visit.cabinetNumber}` : "";
  const renderedInfo = `${visibleCode}${direction}`;

  const statusClassName = `visit--${visitStatus.toLowerCase()}`;

  return (
    <div className={`${styles.visit} ${styles[statusClassName]}`}>
      {renderedInfo}
    </div>
  );
}

export default VisitCard;
