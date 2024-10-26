import { Link, useLocation } from "react-router-dom";
import styles from "./index.module.scss";
import Allini from "@assets/icons/allini-h.svg";
import HeaderLayout from "@layouts/headerLayout";
import MobileHeader from "./mobileHeader";
import { useSidebar } from "@contexts/sidebarContext";

export default function Header() {
  const {
    state: { isOpen },
  } = useSidebar();
  const location = useLocation();

  const logoColor = location.pathname === "/" && !isOpen ? "#fff" : "#00B896";

  return (
    <HeaderLayout>
      <li>
        <h1>
          <Link className={styles.logoWrapper} to="/">
            <Allini color={logoColor} />
          </Link>
        </h1>
      </li>
      <li>
        <MobileHeader />
      </li>
    </HeaderLayout>
  );
}
