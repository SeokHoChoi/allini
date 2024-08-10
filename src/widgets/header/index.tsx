import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import LOGO from "@images/allini/logo_header.png";
import ALLINI from "@images/allini/allini_header.png";
import SEARCH from "@images/etc/search.png";
import MENU from "@images/etc/hamburger_menu.png";
import HeaderLayout from "@layouts/headerLayout";

export default function Header() {
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
        <ul className={styles.mobileMenuWrapper}>
          <li>
            <img src={SEARCH} alt="검색" />
          </li>
          <li>
            <img src={MENU} alt="메뉴" />
          </li>
        </ul>
      </li>
    </HeaderLayout>
  );
}
