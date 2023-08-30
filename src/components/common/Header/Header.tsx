import { useAuth } from "@/contexts";
import { Button } from "@/components";

import styles from "./Header.module.scss";

interface HeaderProps {
  onLogout?: () => void;
  forSpecialist?: boolean;
  displayBoardOpen?: boolean;
  toggleDisplayBoard?: () => void;
}

function Header({
  onLogout,
  forSpecialist = false,
  displayBoardOpen,
  toggleDisplayBoard,
}: HeaderProps) {
  const { isLoggedIn, specialistName } = useAuth();

  const renderedName = isLoggedIn && specialistName && forSpecialist && (
    <div
      className={styles["header__welcome"]}
    >{`Welcome, ${specialistName}`}</div>
  );

  return (
    <div className={styles.header}>
      <Button
        className={`${styles["header__btn"]} ${styles["header__btn--arrow"]}`}
        link="/"
        label="←"
      />
      {renderedName}
      {isLoggedIn && forSpecialist && (
        <Button
          className={styles["header__btn"]}
          label="Logout"
          onClick={onLogout}
        />
      )}
      {!forSpecialist && (
        <Button
          className={styles["header__btn"]}
          label={displayBoardOpen ? "Hide Queue" : "Show Queue"}
          onClick={toggleDisplayBoard}
        />
      )}
    </div>
  );
}

export default Header;
