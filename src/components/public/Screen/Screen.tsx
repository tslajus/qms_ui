import styles from "./Screen.module.scss";

type ScreenProps = {
  content: JSX.Element;
};

function Screen({ content }: ScreenProps) {
  return <div className={styles.screen}>{content}</div>;
}

export default Screen;
