import { PageWrapper, Button } from "@/components";

import styles from "./HomePage.module.scss";

function HomePage() {
  const linkToPublic = <Button link="/public" label="Customer Dashboard" />;
  const linkToSpecialist = (
    <Button link="/specialist" label="Specialist Dashboard" />
  );

  return (
    <PageWrapper>
      <div className={styles.dashboard}>
        {linkToPublic}
        {linkToSpecialist}
      </div>
    </PageWrapper>
  );
}

export default HomePage;
