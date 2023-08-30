import { useEffect, useState } from "react";
import { fetchVisits } from "@/api";
import { constants } from "@/utils";

import { VisitCard, Loader } from "@/components";

import styles from "./DisplayBoard.module.scss";

interface DisplayBoardProps {
  isOpen: boolean;
}

function DisplayBoard({ isOpen }: DisplayBoardProps) {
  const [visits, setVisits] = useState<Visit[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const MAX_VISIT_CARDS = 8;
  const displayBoardClass = isOpen
    ? styles.board
    : `${styles.board} ${styles["board--closed"]}`;

  useEffect(() => {
    const updateVisits = async () => {
      try {
        const newVisits = await fetchVisits();
        setVisits(newVisits);
      } catch {
        console.error("Error fetching visits:", error);
        setError("Failed to fetch visits. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    updateVisits();

    const { FETCH_INTERVAL_FAST, FETCH_INTERVAL_SLOW } = constants;
    let intervalId: NodeJS.Timeout;

    if (isOpen) {
      intervalId = setInterval(updateVisits, FETCH_INTERVAL_FAST);
    } else {
      intervalId = setInterval(updateVisits, FETCH_INTERVAL_SLOW);
    }

    return () => clearInterval(intervalId);
  }, [isOpen]);

  const displayedVisits = visits.slice(0, MAX_VISIT_CARDS);
  while (displayedVisits.length < MAX_VISIT_CARDS) {
    displayedVisits.push({
      reservationCode: "",
      status: "canceled",
      visibleCode: "----",
      cabinetNumber: 0,
      visitTime: new Date(),
      _id: Math.random().toString(),
    });
  }

  const renderedError = <div className={displayBoardClass}>{error}</div>;

  const renderedVisits = (
    <div className={displayBoardClass}>
      {displayedVisits.map((visit) => (
        <VisitCard visit={visit} key={visit.reservationCode} />
      ))}
    </div>
  );

  const renderedBoard = isLoading ? (
    <div className={displayBoardClass}>
      <Loader />
    </div>
  ) : error ? (
    renderedError
  ) : (
    renderedVisits
  );

  return renderedBoard;
}

export default DisplayBoard;
