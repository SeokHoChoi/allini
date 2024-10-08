import SEARCH from "@images/etc/search.png";
import styles from "./index.module.scss";
import Hamburger from "@assets/icons/hamburger.svg";
import { useSidebar } from "@contexts/sidebarContext";

export default function MobileHeader() {
  const { setIsOpen } = useSidebar().actions;
  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <ul className={styles.mobileNavWrapper}>
      <li>
        <button>
          <img src={SEARCH} alt="검색" />
        </button>
      </li>
      <li>
        <button onClick={toggleSidebar}>
          <Hamburger width="24px" height="24px" />
        </button>
      </li>
    </ul>
  );
}
