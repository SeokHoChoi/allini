import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import LOGO from "@images/allini/logo_header.png";
import ALLINI from "@images/allini/allini_header.png";
import HeaderLayout from "@layouts/headerLayout";
import MobileHeader from "./mobileHeader";
import { useSidebar } from "@contexts/sidebarContext";
import Sidebar from "./sidebar";

export default function Header() {
  const { isOpen } = useSidebar().state;

  return (
    <HeaderLayout>
      <li>
        <h1>
          <Link className={styles.logoWrapper} to="/">
            <img src={LOGO} alt="Allini" />
            <img src={ALLINI} alt="알리니" />
          </Link>
        </h1>
      </li>
      <li>
        <MobileHeader />
      </li>
      {isOpen && (
        <li>
          <Sidebar />
        </li>
      )}
    </HeaderLayout>
  );
}
