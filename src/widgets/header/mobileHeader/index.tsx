import { Link, useLocation } from "react-router-dom";
import Hamburger from "@assets/icons/hamburger.svg";
import Search from "@assets/icons/search-h.svg";
import X from "@assets/icons/x.svg";
import Lock from "@assets/icons/lock.svg";
import styles from "./index.module.scss";
import { useSidebar } from "@contexts/sidebarContext";
import clsx from "clsx";

export default function MobileHeader() {
  const {
    actions: { setIsOpen },
    state: { isOpen },
  } = useSidebar();
  const location = useLocation();

  const homeSVGColor = location.pathname === "/" ? "#fff" : "#000";

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <ul className={clsx(styles.mobileNavWrapper)}>
      <li>
        {isOpen ? (
          <Link to="/login" className={clsx(styles.loginBtnWrapper)}>
            <span>로그인</span>
            <Lock />
          </Link>
        ) : (
          <button>
            <Search color={homeSVGColor} />
          </button>
        )}
      </li>
      <li>
        <button onClick={toggleSidebar}>
          {isOpen ? (
            <X />
          ) : (
            <Hamburger width="24px" height="24px" color={homeSVGColor} />
          )}
        </button>
      </li>
    </ul>
  );
}
