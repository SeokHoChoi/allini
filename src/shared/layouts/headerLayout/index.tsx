import clsx from "clsx";
import Sidebar from "@widgets/header/sidebar";
import styles from "./index.module.scss";
import { useLocation } from "react-router-dom";

export default function HeaderLayout({ children }) {
  const location = useLocation();

  const isHomePath = location.pathname === "/";
  return (
    <header
      className={clsx(styles.area, { [styles.borderBottom]: isHomePath })}
    >
      <ul className={clsx(styles.listWrapper)}>{children}</ul>
      <Sidebar />
    </header>
  );
}
