import classnames from "classnames/bind";
import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const cx = classnames.bind(styles);

export default function Sidebar({ className }: { className?: string }) {
  const [isRecordOpen, setRecordOpen] = useState(false);

  const toggleRecord = () => {
    setRecordOpen((prev) => !prev);
  };

  return (
    <ul className={cx("sidebar", className)}>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => cx({ selected: isActive })}
        >
          알리니 소개
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/food-tracker/food-treats"
          className={({ isActive }) => cx({ selected: isActive })}
        >
          사료/간식 목록
        </NavLink>
      </li>
      <li>
        <button onClick={toggleRecord} className={styles.recordButton}>
          알리니 기록
        </button>
      </li>
      <ul className={cx("subList", { open: isRecordOpen })}>
        <li>
          <NavLink
            to="/food-tracker/today"
            className={({ isActive }) => cx({ selected: isActive })}
          >
            오늘의 기록하기
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/food-tracker/report"
            className={({ isActive }) => cx({ selected: isActive })}
          >
            기록 통계
          </NavLink>
        </li>
      </ul>
      <li>
        <NavLink
          to="/mypage"
          className={({ isActive }) => cx({ selected: isActive })}
        >
          마이페이지
        </NavLink>
      </li>
    </ul>
  );
}
