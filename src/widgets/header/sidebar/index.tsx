import clsx from "clsx";
import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";
import { useState } from "react";
import { useSidebar } from "@contexts/sidebarContext";

export default function Sidebar() {
  const {
    actions: { setIsOpen },
    state: { isOpen },
  } = useSidebar();
  const [isRecordOpen, setRecordOpen] = useState(false);
  const [recordActive, setRecordActive] = useState(false);

  const toggleRecord = () => {
    setRecordOpen((prev) => !prev);
  };

  const handleToggle = (isOpen = false) => {
    setIsOpen(false);
    setRecordOpen(isOpen);
  };

  return (
    <ul
      className={clsx(styles.sidebar, { [styles.open]: isOpen })}
      onClick={() => {
        handleToggle(false);
        setRecordActive(false);
      }}
    >
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => clsx({ [styles.selected]: isActive })}
        >
          알리니 소개
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/food-tracker/food-treats"
          className={({ isActive }) => clsx({ [styles.selected]: isActive })}
        >
          사료/간식 목록
        </NavLink>
      </li>
      <li>
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (!recordActive) {
              toggleRecord();
            }
          }}
          className={clsx(styles.recordButton)}
        >
          알리니 기록
        </button>
      </li>
      {isRecordOpen && (
        <ul
          className={clsx(styles.subList, { [styles.open]: isRecordOpen })}
          onClick={(e) => {
            e.stopPropagation();
            setRecordActive(true);
            handleToggle(true);
          }}
        >
          <li>
            <NavLink
              to="/food-tracker/today"
              className={({ isActive }) =>
                clsx({ [styles.selected]: isActive })
              }
            >
              오늘의 기록하기
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/food-tracker/report"
              className={({ isActive }) =>
                clsx({ [styles.selected]: isActive })
              }
            >
              기록 통계
            </NavLink>
          </li>
        </ul>
      )}
      <li>
        <NavLink
          to="/mypage"
          className={({ isActive }) => clsx({ [styles.selected]: isActive })}
        >
          마이페이지
        </NavLink>
      </li>
    </ul>
  );
}
