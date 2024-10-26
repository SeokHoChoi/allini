import clsx from "clsx";
import Sidebar from "@widgets/header/sidebar";
import styles from "./index.module.scss";
import { useLocation } from "react-router-dom";
import { useSidebar } from "@contexts/sidebarContext";

export default function HeaderLayout({ children }) {
  const {
    state: { isOpen },
  } = useSidebar();
  const location = useLocation();

  const isHomePath = location.pathname === "/";
  return (
    <header
      className={clsx(styles.area, {
        [styles.borderBottom]: isHomePath && !isOpen,
        [styles.sidebarOpen]: isOpen,
      })}
    >
      <ul className={clsx(styles.listWrapper)}>{children}</ul>
      <Sidebar />
    </header>
  );
}
