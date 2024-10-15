import clsx from "clsx";
import styles from "./index.module.scss";
import Sign from "@assets/icons/dog-heart-sign.svg";
import EmptyBowl from "@assets/icons/empty-bowl.svg";
import Bowl from "@assets/icons/bowl.svg";
import ToyBall from "@assets/icons/toy-ball.svg";
import Dog from "@assets/icons/dog.svg";
import GrassSVG from "@assets/icons/grassSVG";
import CharacterSelector from "@ui/characterSelector";
import { useCharacterSelector } from "@hooks/useCharacterSelector";

const characters = [
  { path: "mongshil", label: "몽실이" },
  { path: "boksil", label: "복실이" },
  { path: "tosil", label: "토실토실토실" },
];

export default function Today() {
  const { selectedCharacter, selectCharacter } =
    useCharacterSelector(characters);

  return (
    <div className={clsx(styles.todayArea)}>
      <div className={clsx(styles.hillWrapper)}>
        <Sign className={clsx(styles.sign)} />
        <div className={clsx(styles.hill)}></div>
        <GrassSVGWrapper />
        {/* <EmptyBowl className={clsx(styles.emptyBowl)} /> */}
        <Bowl className={clsx(styles.bowl)} />
        <ToyBall className={clsx(styles.toyBall)} />
        <Dog className={clsx(styles.dog)} />
      </div>
      <div className={clsx(styles.background)}></div>

      <CharacterSelector
        className={clsx(styles.selectorArea)}
        characters={characters}
        selectedCharacter={selectedCharacter}
        onSelectCharacter={selectCharacter}
      />

      <div className={clsx(styles.foodTreatsWrapper)}>사료먹기 / 간식먹기</div>
    </div>
  );
}

function GrassSVGWrapper() {
  return (
    <>
      <GrassSVG
        top="62.1%"
        left="3%"
        width={"45px"}
        leftHeight={25}
        rightHeight={35}
        position="absolute"
        rotation={-17}
      />
      <GrassSVG
        top="61.5%"
        left="62.5%"
        width={"50px"}
        leftHeight={25}
        rightHeight={40}
        position="absolute"
        rotation={5.4}
      />
      <GrassSVG
        top="63.4%"
        left="84%"
        width={"50px"}
        leftHeight={35}
        rightHeight={25}
        position="absolute"
        rotation={18}
      />
      <GrassSVG
        top="61.9%"
        left="15%"
        width={"80px"}
        leftHeight={40}
        rightHeight={20}
        position="absolute"
        hasShadow={true}
      />
      <GrassSVG
        top="66.4%"
        left="61%"
        width={"80px"}
        leftHeight={32}
        rightHeight={48}
        position="absolute"
        hasShadow={true}
      />
      <GrassSVG
        top="63.4%"
        left="77%"
        width={"25px"}
        leftHeight={32}
        rightHeight={48}
        position="absolute"
        hasShadow={true}
      />
      <GrassSVG
        top="67%"
        left="19%"
        width={"80px"}
        leftHeight={50}
        rightHeight={60}
        position="absolute"
        hasShadow={true}
      />
      <GrassSVG
        top="65%"
        left="10%"
        width={"30px"}
        position="absolute"
        hasShadow={true}
      />
    </>
  );
}
