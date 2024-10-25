import clsx from "clsx";
import styles from "./index.module.scss";

export default function Footer() {
  return (
    <footer className={clsx(styles.footerArea)}>
      <div>
        <p>알리니 | 개발자: 최석호, 디자이이너: 한지민</p>
        <p>seokho9473@gmail.com</p>
      </div>
      <p className={clsx(styles.copyright)}>
        ⓒ 2024 Allini. All rights reserved.
      </p>
    </footer>
  );
}
