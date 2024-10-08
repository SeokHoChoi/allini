import classnames from "classnames/bind";
import Sidebar from "@widgets/header/sidebar";
import styles from "./index.module.scss";
import { useSidebar } from "@contexts/sidebarContext";

const cx = classnames.bind(styles);

export default function HeaderLayout({ children }) {
  const { isOpen } = useSidebar().state;

  return (
    <header className={cx("area")}>
      <ul className={cx("listWrapper")}>{children}</ul>
      <li>
        <Sidebar className={cx({ open: isOpen })} />
      </li>
    </header>
  );
}
