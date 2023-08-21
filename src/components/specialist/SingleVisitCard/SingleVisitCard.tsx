import { STATUS } from "@/utils/constants";
import { dateToHoursAndMinutes } from "@/utils";

import { PriorityButton, ChangeStatus } from "@/components";

import styles from "./SingleVisitCard.module.scss";

type SingleVisitCardProps = {
  serialNumber?: string;
  estimatedTime?: Date;
  status?: STATUS;
  reservationCode?: string;
  hasPriority?: boolean;
  hasPriorityButton?: boolean;
  isReady?: boolean;
  isActive?: boolean;
  isNext?: boolean;
};

function SingleVisitCard({
  serialNumber,
  estimatedTime,
  status,
  reservationCode = "",
  hasPriority = false,
  hasPriorityButton = false,
  isReady = false,
  isActive = false,
  isNext = false,
}: SingleVisitCardProps) {
  const shouldRenderButtons = status || hasPriorityButton;
  const renderedButtons = shouldRenderButtons && (
    <div className={styles["card__buttons"]}>
      {status && (
        <ChangeStatus
          status={status as STATUS}
          reservationCode={reservationCode}
          isReady={isReady}
          isActive={isActive}
          isNext={isNext}
        />
      )}
      {hasPriorityButton && (
        <PriorityButton reservationCode={reservationCode} />
      )}
    </div>
  );

  const shouldRenderVisitInfo = serialNumber || estimatedTime || hasPriority;
  const visitInfo = shouldRenderVisitInfo && (
    <div className={styles["card__info"]}>
      {serialNumber && (
        <div
          className={`${styles["card__number"]} ${
            isActive && styles["card__number--active"]
          } ${isNext && styles["card__number--next"]}`}
        >
          {serialNumber}
        </div>
      )}

      {estimatedTime && <div>{dateToHoursAndMinutes(estimatedTime)}</div>}

      {hasPriority && !isActive && !isNext && <div>PRIORITY</div>}
    </div>
  );

  const noVisit = (
    <div className={styles["card__empty"]}>
      {isActive
        ? "There is no active visit"
        : "There are no pending visits left"}
    </div>
  );

  return (
    <div
      className={`${styles.card} ${isActive && styles["card--active"]} ${
        isNext && styles["card--next"]
      }`}
    >
      {visitInfo}

      {renderedButtons}
      {!status && noVisit}
    </div>
  );
}

export default SingleVisitCard;
