import { useState } from "react";
import { reserveVisit, getTimeLeft, cancelVisit } from "@/api";
import {
  formatStatusMessage,
  handleReservationInputChange,
  constants,
} from "@/utils";
import {
  PageWrapper,
  Header,
  Button,
  InputButtonGroup,
  Screen,
  ReservationCode,
  DisplayBoard,
} from "@/components";

import styles from "./PublicDashboard.module.scss";

function PublicDashboard() {
  const { INITIAL_SCREEN_MSG } = constants;
  const [screenContent, setScreenContent] = useState<JSX.Element>(
    <div>{INITIAL_SCREEN_MSG}</div>
  );
  const [checkTimeInput, setCheckTimeInput] = useState<string>("");
  const [cancelVisitInput, setCancelVisitInput] = useState<string>("");
  const [reservationCode, setReservationCode] = useState<string | null>(null);
  const [displayBoardOpen, setDisplayBoardOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleReservation = async () => {
    setLoading(true);

    try {
      const response = await reserveVisit();
      const { success, visibleCode } = response;
      if (success) {
        setScreenContent(<ReservationCode number={visibleCode} />);
      } else {
        setScreenContent(<div>Something went wrong, please try again...</div>);
        console.error("visibleCode not found in API response");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleTimeLeft = async () => {
    if (!reservationCode) {
      return;
    }

    try {
      const response = await getTimeLeft(reservationCode);
      const { success, status, timeLeft } = response;

      if (!success) {
        setScreenContent(<div>We could not find your number...</div>);
        console.error("Reservation not found in API response");
      } else {
        const statusMessage = formatStatusMessage(status, timeLeft);
        setScreenContent(statusMessage);
      }
    } catch (error) {
      setScreenContent(<div>Something went wrong, please try again...</div>);
      console.error("Error fetching time left:", error);
    }
    setCheckTimeInput("");
  };

  const handleCancelVisit = async () => {
    if (!reservationCode) {
      return;
    }

    try {
      const response = await cancelVisit(reservationCode);
      const { success, message } = response;
      if (!success) {
        setScreenContent(<div>Something went wrong, please try again...</div>);
        console.error("Cancellation failed");
      } else {
        setScreenContent(<div>{message}</div>);
      }
    } catch (error) {
      setScreenContent(<div>Something went wrong, please try again...</div>);
      console.error("Error canceling visit:", error);
    }
    setCancelVisitInput("");
  };

  const handleCheckTimeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleReservationInputChange(e, setCheckTimeInput, setReservationCode);
  };

  const handleCancelVisitInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleReservationInputChange(e, setCancelVisitInput, setReservationCode);
  };

  return (
    <PageWrapper>
      <Header
        displayBoardOpen={displayBoardOpen}
        toggleDisplayBoard={() =>
          setDisplayBoardOpen((prevState) => !prevState)
        }
      />
      <div className={styles.dashboard}>
        <Screen content={screenContent} />
        <Button
          label="Reserve Visit"
          onClick={handleReservation}
          disabled={loading}
        />

        <InputButtonGroup
          fieldValue={checkTimeInput}
          fieldOnChange={handleCheckTimeInput}
          fieldPlaceholder="Enter your number"
          buttonLabel="Check Time Left"
          buttonOnClick={handleTimeLeft}
          maxLength={4}
          numberOnly
          disabled={loading}
        />

        <InputButtonGroup
          fieldValue={cancelVisitInput}
          fieldOnChange={handleCancelVisitInput}
          fieldPlaceholder="Enter your number"
          buttonLabel="Cancel Visit"
          buttonOnClick={handleCancelVisit}
          maxLength={4}
          numberOnly
          disabled={loading}
        />
      </div>
      <DisplayBoard isOpen={displayBoardOpen} />
    </PageWrapper>
  );
}

export default PublicDashboard;
