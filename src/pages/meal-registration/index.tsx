import { useState } from "react";
import Meal from "./meal";
import Puppy from "./puppy";
import classNames from "classnames/bind";
import styles from "./index.module.scss";

/** v1 에선 사료/간식은 동일한 데이터를 받을 예정입니다. */
export default function MealRegistration() {
  const [isMealTab, setIsMealTab] = useState(true);
  const selectedTab = isMealTab ? <Meal /> : <Puppy />;

  const cx = classNames.bind(styles);

  return (
    <div>
      <nav role="tablist" aria-label="Sample Tabs">
        <ul className={cx("tabWrapper")}>
          <li role="presentation">
            <button
              role="tab"
              aria-selected={isMealTab} // 현재 선택된 탭을 식별하는 데 사용
              className={cx({ selected: isMealTab })}
              id="tab-meal"
              onClick={() => setIsMealTab(true)}
              aria-controls="panel-meal" // 탭 버튼이 제어하는 탭 패널을 식별
            >
              상품 정보
            </button>
          </li>
          <li role="presentation" className={cx("tab")}>
            <button
              role="tab"
              aria-selected={!isMealTab}
              className={cx({ selected: !isMealTab })}
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
        className={cx("panelArea", {
          mealPanel: isMealTab,
          puppyPanel: !isMealTab,
        })}
      >
        {selectedTab}
      </article>
    </div>
  );
}
