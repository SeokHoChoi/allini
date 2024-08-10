import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import LOGO from "@images/allini/logo_header.png";
import ALLINI from "@images/allini/allini_header.png";
import HeaderLayout from "@layouts/headerLayout";
import MobileHeader from "./mobileHeader";
import DesktopHeader from "./desktopHeader";
import { useResponsive } from "@hooks/useResponsive";

export default function Header() {
  const isMobile = useResponsive();

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
      <li>{isMobile ? <MobileHeader /> : <DesktopHeader />}</li>
    </HeaderLayout>
  );
}
