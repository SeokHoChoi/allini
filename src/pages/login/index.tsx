import { useState } from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import LOGO from "@images/allini/login_logo.png";
import GOGLE from "@images/social/gogle.png";
import KAKAO from "@images/social/kakao.png";
import ALLINI from "@images/allini/allini_text.png";
import Invisible from "@assets/icons/pw-invisible.svg";
import Visible from "@assets/icons/pw-visible.svg";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  return (
    <section className={styles.loginArea}>
      <div className={styles.welcomeWrapper}>
        <img src={LOGO} alt="Allini" />
        <h2 className={styles.welcomeText}>
          <span className={styles.alliniTextWrapper}>
            <strong>
              <img src={ALLINI} alt="알리니" />
            </strong>
            <span className={styles.connectionText}>에 오신걸</span>
          </span>
          <b>환영합니다!</b>
        </h2>
      </div>
      <div className={styles.loginForm}>
        <form>
          <div className={styles.inputWrapper}>
            <input
              className={styles.emailInput}
              type="email"
              name="email"
              placeholder="이메일"
              required
            />
            <div className={styles.passwordInputWrapper}>
              <input
                className={clsx(styles.passwordInput)}
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="비밀번호"
                required
              />
              <button
                className={styles.passwordToggle}
                onClick={togglePasswordVisibility}
                type="button"
              >
                {showPassword ? <Visible /> : <Invisible />}
              </button>
            </div>
          </div>
          <button className={styles.loginButton} type="submit">
            로그인
          </button>
        </form>
        <div className={styles.anotherPageWrapper}>
          <button className={styles.signupButton}>회원가입</button>
          <p>
            {/* Link 태그 or 팝업 버튼으로 변경 예정 */}
            <a className={styles.findAccountBtn} href="/find-account">
              아이디/비밀번호 찾기
            </a>
          </p>
        </div>
        <div className={styles.socialLoginWrapper}>
          <button className={styles.googleLogin}>
            <img src={GOGLE} alt="구글 로그인" />
          </button>
          <button className={styles.kakaoLogin}>
            <img src={KAKAO} alt="카카오 로그인" />
          </button>
        </div>
      </div>
    </section>
  );
}
