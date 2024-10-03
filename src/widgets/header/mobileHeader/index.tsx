import SEARCH from "@images/etc/search.png";
import styles from "./index.module.scss";
import Hamburger from "@assets/icons/hamburger.svg";

export default function MobileHeader() {
  return (
    <ul className={styles.mobileNavWrapper}>
      <li>
        <button>
          <img src={SEARCH} alt="검색" />
        </button>
      </li>
      <li>
        <button>
          <Hamburger />
        </button>
      </li>
    </ul>
  );
}
