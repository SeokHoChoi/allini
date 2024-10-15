import clsx from "clsx";
import styles from "./index.module.scss";
import Sign from "@assets/icons/dog-heart-sign.svg";
import EmptyBowl from "@assets/icons/empty-bowl.svg";
import Bowl from "@assets/icons/bowl.svg";
import ToyBall from "@assets/icons/toy-ball.svg";
import Dog from "@assets/icons/dog.svg";

export default function Today() {
  return (
    <div className={clsx(styles.todayArea)}>
      <div className={clsx(styles.hillWrapper)}>
        <Sign className={clsx(styles.sign)} />
        <div className={clsx(styles.hill)}></div>
        {/* <EmptyBowl className={clsx(styles.emptyBowl)} /> */}
        <Bowl className={clsx(styles.bowl)} />
        <ToyBall className={clsx(styles.toyBall)} />
        <Dog className={clsx(styles.dog)} />
      </div>
      <div className={clsx(styles.background)}></div>

      <div className={clsx(styles.content)}>
        <div>몽실이/복실이</div>
        <div>강아지 사진, 밥그릇</div>
        <div>사료먹기 / 간식먹기</div>
      </div>
    </div>
  );
}
