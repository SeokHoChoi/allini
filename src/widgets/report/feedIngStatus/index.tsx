import clsx from "clsx";
import styles from "./index.module.scss";

const FeedingStatus = ({
  isAM = true,
  percentage = 75,
  mealCount = 2,
  maxMealCount = 2,
  snackCount = 0,
  maxSnackCount = 1,
  onAddFood = () => {},
}) => {
  const isComplete = percentage >= 100;

  return (
    <div className={clsx(styles.container)}>
      {/* Time of Day */}
      <span className={clsx(styles.timeIndicator)}>
        {isAM ? "오전" : "오후"}
      </span>

      {/* Progress Circle */}
      <div className={clsx(styles.progressWrapper)}>
        <svg viewBox="0 0 100 100" className={clsx(styles.progressCircle)}>
          {/* Background Circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            strokeWidth="10"
            className={clsx(styles.backgroundCircle)}
          />

          {/* Progress Circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            strokeWidth="10"
            className={clsx(styles.progressArc)}
            strokeDasharray={`${2 * Math.PI * 45}`}
            strokeDashoffset={`${2 * Math.PI * 45 * (1 - percentage / 100)}`}
            strokeLinecap="round"
          />
        </svg>

        {/* Percentage Text */}
        <div className={clsx(styles.percentageWrapper)}>
          <span className={clsx(styles.percentageText)}>{percentage}%</span>
        </div>
      </div>

      {/* Feeding Status */}
      <div className={clsx(styles.statusWrapper)}>
        <StatusItem
          label={"사료"}
          count={mealCount}
          maxCount={maxMealCount}
          isSnack={false}
        />
        <StatusItem
          label={"간식"}
          count={snackCount}
          maxCount={maxSnackCount}
          isSnack={true}
        />
      </div>

      {/* Add Food Button */}
      <button
        onClick={!isComplete ? onAddFood : undefined}
        className={clsx(styles.addButton, {
          [styles.disabled]: isComplete,
          [styles.enabled]: !isComplete,
        })}
        disabled={isComplete}
      >
        음식 추가하기
      </button>
    </div>
  );
};

export default FeedingStatus;

interface StatusItemProps {
  label: string;
  count: number;
  maxCount: number;
  isSnack?: boolean;
}

const StatusItem = ({
  label,
  count,
  maxCount,
  isSnack = false,
}: StatusItemProps) => {
  return (
    <div className={clsx(styles.statusItem)}>
      <span className={clsx(styles.label)}>{label}</span>
      <span className={clsx(styles.value)}>
        {isSnack && count === 0 ? (
          <div>x</div>
        ) : (
          <div>
            <span>{count}</span>
            <span>/</span>
            <span>{maxCount}</span>
          </div>
        )}
      </span>
    </div>
  );
};
