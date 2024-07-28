import styles from "./index.module.scss";

export default function HeaderLayout({ children }) {
  return (
    <header className={styles.area}>
      <ul className={styles.listWrapper}>{children}</ul>
    </header>
  );
}
