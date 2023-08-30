import { useState } from "react";
import { useAuth } from "@/contexts";

import {
  PageWrapper,
  Header,
  SpecialistLogin,
  AssignedVisits,
  FirstTwoVisits,
  TestAccounts,
} from "@/components";

import styles from "./SpecialistDashboard.module.scss";

function SpecialistDashboard() {
  const { isLoggedIn, logout } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("specialistId");
    logout();
  };

  const fillLoginFields = (username: string, password: string) => {
    setUsername(username);
    setPassword(password);
  };

  const loginPanel = !isLoggedIn && (
    <div className={styles["login-panel"]}>
      <SpecialistLogin
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
      <TestAccounts fillFields={fillLoginFields} />{" "}
    </div>
  );

  return (
    <PageWrapper>
      <Header onLogout={handleLogout} forSpecialist />
      {loginPanel}
      <div className={styles.dashboard}>
        {isLoggedIn && <FirstTwoVisits />}
        {isLoggedIn && <AssignedVisits />}
      </div>
    </PageWrapper>
  );
}

export default SpecialistDashboard;
