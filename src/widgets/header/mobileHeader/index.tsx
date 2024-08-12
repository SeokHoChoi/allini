import SEARCH from "@images/etc/search.png";
import MENU from "@images/etc/hamburger_menu.png";
import styles from "./index.module.scss";

export default function MobileHeader() {
  return (
    <ul className={styles.mobileNavWrapper}>
      <li>
        <img src={SEARCH} alt="검색" />
      </li>
      <li>
        <img src={MENU} alt="메뉴" />
      </li>
    </ul>
  );
}
