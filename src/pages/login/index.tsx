import { useState } from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import LOGO from "@images/allini/login_logo.png";
import Google from "@assets/icons/google.svg";
import Kakao from "@assets/icons/kakao.svg";
import ALLINI from "@images/allini/allini_text.png";
import { useApi } from "@contexts/apiContext";
import FormInput from "@ui/formInput";
import { Link } from "react-router-dom";

interface ValidationState {
  email: {
    isError: boolean;
    message: string;
  };
  password: {
    isError: boolean;
    message: string;
  };
}

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [validation, setValidation] = useState<ValidationState>({
    email: { isError: false, message: "앗!" },
    password: { isError: false, message: "앗!" },
  });
  const api = useApi();

  /** 로그인 API Handler 임시 구현 */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLoading) return;

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // 초기화
    setValidation({
      email: { isError: false, message: "" },
      password: { isError: false, message: "" },
    });

    // 클라이언트 측 유효성 검사
    if (!email && !password) {
      setValidation({
        email: { isError: true, message: "앗! 이메일이거나 잘못 입력했어요." },
        password: { isError: true, message: "앗! 비밀번호를 입력해주세요." },
      });
      return;
    }

    if (!email) {
      setValidation((prev) => ({
        ...prev,
        email: { isError: true, message: "앗! 이메일이거나 잘못 입력했어요." },
      }));
      return;
    }

    if (!password) {
      setValidation((prev) => ({
        ...prev,
        password: { isError: true, message: "앗! 비밀번호를 입력해주세요." },
      }));
      return;
    }

    setIsLoading(true);

    try {
      // TODO: 여기에 로그인 API 호출
      const response = await api.login(email, password);

      // 임시로 서버 에러 시뮬레이션 (아이디, 비밀번호 별도가 아닌 로그인 실패로 응답 예정)
      if (response) {
        setValidation({
          email: {
            isError: true,
            message: "앗! 아이디 또는 비밀번호를 다시 한 번 확인해주세요.",
          },
          password: {
            isError: true,
            message: "앗! 아이디 또는 비밀번호를 다시 한 번 확인해주세요.",
          },
        });
      } else {
        // 성공적인 로그인 시 에러 상태 리셋
        setValidation({
          email: { isError: false, message: "" },
          password: { isError: false, message: "" },
        });
        // TODO: 리다이렉트 등의 추가 처리
      }
    } catch (error) {
      // 서버 에러 처리
      setValidation({
        email: {
          isError: true,
          message: "앗! 아이디 또는 비밀번호를 다시 한 번 확인해주세요.",
        },
        password: {
          isError: true,
          message: "앗! 아이디 또는 비밀번호를 다시 한 번 확인해주세요.",
        },
      });
    } finally {
      setIsLoading(false);
    }
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
        <form onSubmit={handleSubmit}>
          <div className={styles.inputWrapper}>
            <FormInput.EmailInput error={validation.email} required />
            <FormInput.PasswordInput error={validation.password} required />
          </div>

          <button
            className={clsx(styles.loginButton, {
              [styles.loginButtonDisabled]: isLoading,
            })}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "로그인 중..." : "로그인"}
          </button>
        </form>
        <div className={styles.anotherPageWrapper}>
          <Link to="/signup" className={styles.signupButton}>
            회원가입
          </Link>
          <p>
            {/* Link 태그 or 팝업 버튼으로 변경 예정 */}
            <a className={styles.findAccountBtn} href="/find-account">
              아이디/비밀번호 찾기
            </a>
          </p>
        </div>
        <div className={styles.socialLoginWrapper}>
          <button className={styles.googleLogin}>
            <Google />
          </button>
          <button className={styles.kakaoLogin}>
            <Kakao />
          </button>
        </div>
      </div>
    </section>
  );
}
