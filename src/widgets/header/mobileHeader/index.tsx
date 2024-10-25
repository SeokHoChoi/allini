import { useLocation } from "react-router-dom";
import Hamburger from "@assets/icons/hamburger.svg";
import Search from "@assets/icons/search-h.svg";
import styles from "./index.module.scss";
import { useSidebar } from "@contexts/sidebarContext";

export default function MobileHeader() {
  const { setIsOpen } = useSidebar().actions;
  const location = useLocation();

  const homeSVGColor = location.pathname === "/" ? "#fff" : "#000";

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <ul className={styles.mobileNavWrapper}>
      <li>
        <button>
          <Search color={homeSVGColor} />
        </button>
      </li>
      <li>
        <button onClick={toggleSidebar}>
          <Hamburger width="24px" height="24px" color={homeSVGColor} />
        </button>
      </li>
    </ul>
  );
}
