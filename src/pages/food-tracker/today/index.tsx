import clsx from "clsx";
import styles from "./index.module.scss";
import Sign from "@assets/icons/dog-heart-sign.svg";

export default function Today() {
  return (
    <div className={clsx(styles.todayArea)}>
      <div className={clsx(styles.hillWrapper)}>
        <Sign className={clsx(styles.sign)} />
        <div className={clsx(styles.hill)}></div>
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
