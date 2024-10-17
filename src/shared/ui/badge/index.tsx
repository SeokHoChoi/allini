import styles from "./index.module.scss";

export default function Badge({ labels }: { labels: string[] }) {
  return (
    <div className={styles.badges}>
      {labels.map((label, index) => (
        <span key={index} className={styles.badge}>
          {label}
        </span>
      ))}
    </div>
  );
}
