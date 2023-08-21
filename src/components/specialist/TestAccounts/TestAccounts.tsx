import { useAuth } from "@/contexts";
import { Button } from "@/components";

import styles from "./TestAccounts.module.scss";

interface TestAccountsProps {
  fillFields: (username: string, password: string) => void;
}

function TestAccounts({ fillFields }: TestAccountsProps) {
  const { allSpecialists } = useAuth();
  const [testSpecialist1, testSpecialist2, testSpecialist3, testSpecialist4] =
    allSpecialists;

  const testAccounts = [
    {
      username: "testSpecialist_1",
      password: "testPassword_1",
      label: "Test 1",
      isCurrentlyWorking: testSpecialist1?.isCurrentlyWorking || false,
    },
    {
      username: "testSpecialist_2",
      password: "testPassword_2",
      label: "Test 2",
      isCurrentlyWorking: testSpecialist2?.isCurrentlyWorking || false,
    },
    {
      username: "testSpecialist_3",
      password: "testPassword_3",
      label: "Test 3",
      isCurrentlyWorking: testSpecialist3?.isCurrentlyWorking || false,
    },
    {
      username: "testSpecialist_4",
      password: "testPassword_4",
      label: "Test 4",
      isCurrentlyWorking: testSpecialist4?.isCurrentlyWorking || false,
    },
  ];

  const handleTestAccountClick = (index: number) => {
    const { username, password } = testAccounts[index];
    fillFields(username, password);
  };

  if (!allSpecialists.length) {
    return null;
  }

  const activeSpecialist = (
    <div className={styles["specialist__status"]}>Currently working</div>
  );
  const inactiveSpecialist = (
    <div
      className={`${styles["specialist__status"]} ${styles["specialist__status--inactive"]}`}
    >
      On a break
    </div>
  );

  const renderedTestAccounts = testAccounts.map((specialist, index) => (
    <div className={styles.specialist} key={index}>
      <Button
        className={styles["specialist__btn"]}
        label={specialist.label}
        disabled={!specialist.isCurrentlyWorking}
        onClick={() => handleTestAccountClick(index)}
      />
      {specialist.isCurrentlyWorking ? activeSpecialist : inactiveSpecialist}
    </div>
  ));

  return (
    <div className={styles.fillers}>
      <div>Fill with:</div>
      {renderedTestAccounts}
    </div>
  );
}

export default TestAccounts;
