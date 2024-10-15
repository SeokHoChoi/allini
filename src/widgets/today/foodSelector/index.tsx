import clsx from "clsx";
import styles from "./index.module.scss";
import React from "react";

export default function FoodSelector({
  SVG,
  title,
  current,
}: {
  SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  current: string;
}) {
  return (
    <li className={clsx(styles.SelectorArea)}>
      <button>
        <SVG />
        <span className={clsx(styles.titleText)}>{title}</span>
        <span className={clsx(styles.currentText)}>{current}</span>
      </button>
    </li>
  );
}
