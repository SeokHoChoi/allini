import Calendar from "@widgets/report/fullCalendar";
import clsx from "clsx";
import styles from "./index.module.scss";
import WrapperBox from "@ui/wrapperBox";
import FeedingStatus from "@widgets/report/feedIngStatus";
import IngredientAnalysis from "@widgets/report/ingredientAnalysis";
import CharacterSelector from "@ui/characterSelector";
import { useCharacterSelector } from "@hooks/useCharacterSelector";

const characters = [
  { path: "mongshil", label: "몽실이" },
  { path: "boksil", label: "복실이" },
  { path: "tosil", label: "토실토실토실" },
];

export default function Report() {
  const { selectedCharacter, selectCharacter } =
    useCharacterSelector(characters);

  return (
    <div className={clsx(styles.reportArea)}>
      <CharacterSelector
        className={clsx(styles.selectorArea)}
        characters={characters}
        selectedCharacter={selectedCharacter}
        onSelectCharacter={selectCharacter}
      />

      <WrapperBox className={clsx(styles.wrappBoxArea)}>
        <Calendar />
      </WrapperBox>
      <div className={clsx(styles.statusWrapper)}>
        <WrapperBox>
          <FeedingStatus
            isAM={true}
            percentage={100}
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
      <WrapperBox>
        {/* color 에 대한 소통 필요 */}
        <IngredientAnalysis
        //   ingredients={[
        //     {
        //       name: "닭고기",
        //       percentage: 48,
        //       color: "#E8805F",
        //       allergyLevel: "low",
        //     },
        //   ]
        // }
        />
      </WrapperBox>
    </div>
  );
}
