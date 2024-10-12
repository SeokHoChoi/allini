import clsx from "clsx";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./index.module.scss";

/** v1 에선 사료/간식은 동일한 데이터를 받을 예정입니다. */
export default function Registration() {
  return (
    <div>
      <nav role="tablist" aria-label="Sample Tabs">
        <ul className={clsx(styles.tabWrapper)}>
          <li role="presentation">
            <NavLink
              to="food"
              role="tab"
              className={({ isActive }) =>
                clsx({ [styles.selected]: isActive })
              }
              id="tab-food"
              aria-controls="panel-food" // 탭 버튼이 제어하는 탭 패널을 식별
            >
              상품 정보
            </NavLink>
          </li>
          <li role="presentation" className={clsx(styles.tab)}>
            <NavLink
              to="puppy"
              role="tab"
              className={({ isActive }) =>
                clsx({ [styles.selected]: isActive })
              }
              id="tab-puppy"
              aria-controls="panel-puppy"
            >
              강아지 정보
            </NavLink>
          </li>
        </ul>
      </nav>
      <article className={clsx(styles.panelArea)}>
        <Outlet />
      </article>
    </div>
  );
}
