import styles from "./ReservationCode.module.scss";

type ReservationCodeProps = {
  number: string;
};

function ReservationCode({ number }: ReservationCodeProps) {
  return (
    <div className={styles["message"]}>
      <div className={styles["message__text"]}>
        Reservation was successful, your number is:
      </div>
      <div className={styles["message__number"]}>{number}</div>
    </div>
  );
}

export default ReservationCode;
