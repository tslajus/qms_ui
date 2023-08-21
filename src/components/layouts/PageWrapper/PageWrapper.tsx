import { ReactNode } from "react";
import styles from "./PageWrapper.module.scss";

interface PageWrapperProps {
  children: ReactNode;
}

function PageWrapper({ children }: PageWrapperProps) {
  return <div className={styles.container}>{children}</div>;
}

export default PageWrapper;
