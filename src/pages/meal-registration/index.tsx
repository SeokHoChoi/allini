import { useState } from "react";
import Meal from "./meal";
import Puppy from "./puppy";
import styles from "./index.module.scss";

/** v1 에선 사료/간식은 동일한 데이터를 받을 예정입니다. */
export default function MealRegistration() {
  const [isMealTab, setIsMealTab] = useState(true);
  const selectedTab = isMealTab ? <Meal /> : <Puppy />;

  return (
    <div>
      <nav role="tablist" aria-label="Sample Tabs">
        <ul className={styles.tabWrapper}>
          <li role="presentation">
            <button
              role="tab"
              aria-selected={isMealTab} // 현재 선택된 탭을 식별하는 데 사용
              className={isMealTab ? styles.selected : ""}
              id="tab-meal"
              onClick={() => setIsMealTab(true)}
              aria-controls="panel-meal" // 탭 버튼이 제어하는 탭 패널을 식별
            >
              상품 정보
            </button>
          </li>
          <li role="presentation" className={styles.tab}>
            <button
              role="tab"
              aria-selected={!isMealTab}
              className={!isMealTab ? styles.selected : ""}
              id="tab-puppy"
              onClick={() => setIsMealTab(false)}
              aria-controls="panel-puppy"
            >
              강아지 정보
            </button>
          </li>
        </ul>
      </nav>
      <article
        className={`${styles.panelArea} ${
          isMealTab ? styles.mealPanel : styles.puppyPanel
        }`}
      >
        {selectedTab}
      </article>
    </div>
  );
}
