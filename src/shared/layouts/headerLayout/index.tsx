import clsx from "clsx";
import Sidebar from "@widgets/header/sidebar";
import styles from "./index.module.scss";

export default function HeaderLayout({ children }) {
  return (
    <header className={clsx(styles.area)}>
      <ul className={clsx(styles.listWrapper)}>{children}</ul>
      <li>
        <Sidebar />
      </li>
    </header>
  );
}
