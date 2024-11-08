import styles from "./index.module.scss";

export default function DesktopHeader() {
  return (
    <ul className={styles.desktopNavWrapper}>
      <li>로그인</li>
      <li>회원가입</li>
      <li>사료/간식</li>
    </ul>
  );
}
