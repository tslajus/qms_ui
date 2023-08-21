import styles from "./Loader.module.scss";

function Loader() {
  return (
    <div className={styles.loader}>
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
