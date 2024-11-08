import clsx from "clsx";
import styles from "./index.module.scss";
import TabComponent from "@ui/tabComponent";

const tabs = [
  { path: "today", label: "오늘의 밥그릇" },
  { path: "food-treats", label: "밥그릇 모아보기" },
  { path: "report", label: "밥그릇 기록장" },
];

export default function FoodTracker() {
  return (
    <div className={clsx(styles.trackerArea)}>
      <TabComponent tabs={tabs} />
    </div>
  );
}
