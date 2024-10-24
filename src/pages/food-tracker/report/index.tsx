import Calendar from "@widgets/report/fullCalendar";
import clsx from "clsx";
import styles from "./index.module.scss";
import WrapperBox from "@ui/wrapperBox";
import FeedingStatus from "@widgets/report/feedIngStatus";

export default function Report() {
  return (
    <div className={clsx(styles.reportArea)}>
      <WrapperBox>
        <Calendar />
      </WrapperBox>
      <div className={clsx(styles.statusWrapper)}>
        <WrapperBox>
          <FeedingStatus
            isAM={true}
            percentage={20}
            mealCount={2}
            maxMealCount={2}
            snackCount={0}
            maxSnackCount={1}
            onAddFood={() => console.log("음식 추가")}
          />
        </WrapperBox>
        <WrapperBox>
          <FeedingStatus
            isAM={false}
            percentage={20}
            mealCount={2}
            maxMealCount={2}
            snackCount={0}
            maxSnackCount={1}
            onAddFood={() => console.log("음식 추가")}
          />
        </WrapperBox>
      </div>
      <div>성분 조회 데이터</div>
    </div>
  );
}
