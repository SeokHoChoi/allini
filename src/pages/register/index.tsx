import TabComponent from "@ui/tabComponent";

const tabs = [
  { path: "food", label: "상품 정보" },
  { path: "puppy", label: "강아지 정보" },
];

/** v1 에선 사료/간식은 동일한 데이터를 받을 예정입니다. */
export default function Registration() {
  return <TabComponent tabs={tabs} />;
}
