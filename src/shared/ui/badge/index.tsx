import clsx from "clsx";
import styles from "./index.module.scss";

export default function Badge({ labels }: { labels: string[] }) {
  return (
    <div className={clsx(styles.badges)}>
      {labels.map((label, index) => (
        <span key={index} className={clsx(styles.badge)}>
          {label}
        </span>
      ))}
    </div>
  );
}
