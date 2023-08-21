import styles from "./Loader.module.scss";

interface LoaderProps {
  isFullScreen?: boolean;
}

function Loader({ isFullScreen = true }: LoaderProps) {
  const loaderClassName = !isFullScreen
    ? styles["full-screen"]
    : styles["loader--full-screen"];

  return (
    <div className={loaderClassName}>
      <div className={styles["loader__ring"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
