import styles from "./index.module.scss";
import LOGO from "../../assets/image/allini/login_logo.png";
import GOGLE from "../../assets/image/social/gogle.png";
import KAKAO from "../../assets/image/social/kakao.png";
import ALLINI from "../../assets/image/allini/allini_text.png";

export default function Login() {
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
            <input
              className={styles.passwordInput}
              type="password"
              name="password"
              placeholder="비밀번호"
              required
            />
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
