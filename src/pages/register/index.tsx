import classNames from "classnames/bind";
import styles from "./index.module.scss";
import { NavLink, Outlet } from "react-router-dom";

/** v1 에선 사료/간식은 동일한 데이터를 받을 예정입니다. */
export default function Registration() {
  const cx = classNames.bind(styles);

  return (
    <div>
      <nav role="tablist" aria-label="Sample Tabs">
        <ul className={cx("tabWrapper")}>
          <li role="presentation">
            <NavLink
              to="food"
              role="tab"
              className={({ isActive }) => cx({ selected: isActive })}
              id="tab-food"
              aria-controls="panel-food" // 탭 버튼이 제어하는 탭 패널을 식별
            >
              상품 정보
            </NavLink>
          </li>
          <li role="presentation" className={cx("tab")}>
            <NavLink
              to="puppy"
              role="tab"
              className={({ isActive }) => cx({ selected: isActive })}
              id="tab-puppy"
              aria-controls="panel-puppy"
            >
              강아지 정보
            </NavLink>
          </li>
        </ul>
      </nav>
      <article className={cx("panelArea")}>
        <Outlet />
      </article>
    </div>
  );
}
