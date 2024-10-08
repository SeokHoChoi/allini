import classnames from "classnames/bind";
import styles from "./index.module.scss";

const cx = classnames.bind(styles);

export default function Sidebar({ className }: { className?: string }) {
  return (
    <ul className={cx("sidebar", className)}>
      <li>Sidebar Item 1</li>
      <li>Sidebar Item 2</li>
      <li>Sidebar Item 3</li>
    </ul>
  );
}
