import styles from "./index.module.scss";

export default function Login() {
  return (
    <section className={styles.loginArea}>
      <div className={styles.loginImage}>
        <img src="대표이미지.jpg" alt="Allini" />
      </div>
      <div className={styles.welcomeText}>
        <h2>
          <strong>알리니</strong>에 오신걸 <b>환영합니다!</b>
        </h2>
      </div>
      <div className={styles.loginForm}>
        <form>
          <label htmlFor="email">
            <img src="사람모양.jpg" alt="ID" />
            이메일
          </label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">
            <img src="자물쇠모양.jpg" alt="PASSWORD" />
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
            <img src={"googleIcon"} alt="구글 로그인" />
          </button>
          <button className={styles.kakaoLogin}>
            <img src={"kakaoIcon"} alt="카카오 로그인" />
          </button>
        </div>
      </div>
    </section>
  );
}
