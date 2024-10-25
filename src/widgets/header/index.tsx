import { Link, useLocation } from "react-router-dom";
import styles from "./index.module.scss";
import Allini from "@assets/icons/allini-h.svg";
import HeaderLayout from "@layouts/headerLayout";
import MobileHeader from "./mobileHeader";

export default function Header() {
  const location = useLocation();

  const logoColor = location.pathname === "/" ? "#fff" : "#00B896";

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
