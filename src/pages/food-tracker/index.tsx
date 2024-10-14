import TabComponent from "@ui/tabComponent";

const tabs = [
  { path: "today", label: "오늘의 밥그릇" },
  { path: "food-treats", label: "밥그릇 모아보기" },
  { path: "report", label: "밥그릇 기록장" },
];

export default function FoodTracker() {
  return <TabComponent tabs={tabs} />;
}
