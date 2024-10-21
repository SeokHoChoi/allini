import Calendar from "@widgets/report/fullCalendar";
import clsx from "clsx";
import styles from "./index.module.scss";
import WrapperBox from "@ui/wrapperBox";

export default function Report() {
  return (
    <div className={clsx(styles.reportArea)}>
      <WrapperBox>
        <Calendar />
      </WrapperBox>
      <div>바 차트 및 음식 추가</div>
      <div>성분 조회 데이터</div>
    </div>
  );
}
