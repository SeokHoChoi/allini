import classnames from "classnames/bind";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
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
        <Link to="/about">알리니 소개</Link>
      </li>
      <li>
        <Link to="/food-tracker">사료/간식 목록</Link>
      </li>
      <li>
        <button onClick={toggleRecord} className={styles.recordButton}>
          알리니 기록
        </button>
      </li>
      <ul className={cx("subList", { open: isRecordOpen })}>
        <li>
          <Link to="/food-tracker/today">오늘의 기록하기</Link>
        </li>
        <li>
          <Link to="/food-tracker/report">기록 통계</Link>
        </li>
      </ul>
      <li>
        <Link to="/mypage">마이페이지</Link>
      </li>
    </ul>
  );
}
