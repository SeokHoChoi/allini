import Sidebar from "@widgets/header/sidebar";
import styles from "./index.module.scss";
import { useSidebar } from "@contexts/sidebarContext";

export default function HeaderLayout({ children }) {
  const { isOpen } = useSidebar().state;

  return (
    <header className={styles.area}>
      <ul className={styles.listWrapper}>{children}</ul>
      {isOpen && (
        <li>
          <Sidebar />
        </li>
      )}
    </header>
  );
}
