import { useEffect, useState } from "react";
import { fetchVisits } from "@/api";
import { constants } from "@/utils";

import { PageWrapper, VisitCard, Loader } from "@/components";

import styles from "./DisplayBoard.module.scss";

function DisplayBoard() {
  const [visits, setVisits] = useState<Visit[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const MAX_VISIT_CARDS = 8;

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

    const { FETCH_INTERVAL } = constants;
    const intervalId = setInterval(updateVisits, FETCH_INTERVAL);

    return () => clearInterval(intervalId);
  }, []);

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

  const renderedError = <div>{error}</div>;

  const renderedVisits = (
    <div className={styles.board}>
      {displayedVisits.map((visit) => (
        <VisitCard visit={visit} key={visit._id} />
      ))}
    </div>
  );

  const renderedBoard = isLoading ? (
    <Loader />
  ) : error ? (
    renderedError
  ) : (
    renderedVisits
  );

  return <PageWrapper>{renderedBoard}</PageWrapper>;
}

export default DisplayBoard;
