import styles from "./index.module.scss";
import LOGO from "../../assets/image/allini/login_logo.png";
import GOGLE from "../../assets/image/social/gogle.png";
import KAKAO from "../../assets/image/social/kakao.png";
import USER from "../../assets/image/etc/user.png";
import UNLOCK from "../../assets/image/etc/unlock.png";

export default function Login() {
  return (
    <section className={styles.loginArea}>
      <div className={styles.loginImage}>
        <img src={LOGO} alt="Allini" />
      </div>
      <div className={styles.welcomeText}>
        <h2>
          <strong>알리니</strong>에 오신걸 <b>환영합니다!</b>
        </h2>
      </div>
      <div className={styles.loginForm}>
        <form>
          <label htmlFor="email">
            <img src={USER} alt="ID" />
            이메일
          </label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">
            <img src={UNLOCK} alt="PASSWORD" />
            비밀번호
          </label>
          <input type="password" id="password" name="password" required />

          <button type="submit">로그인</button>
        </form>
        <button className={styles.signupButton}>회원가입</button>
        <p>
          <a href="/find-account">아이디/비밀번호 찾기</a>
        </p>
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
