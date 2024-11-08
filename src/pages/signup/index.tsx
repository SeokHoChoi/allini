import clsx from "clsx";
import FormInput from "@ui/formInput";
import styles from "./index.module.scss";
import { useState } from "react";

export default function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  // TODO: 회원가입을 위한 데이터 전체가 입력됐는지 체크하는 로직 추가 및 state명 수정
  const [singupData, setSignupData] = useState(false);

  return (
    <div className={clsx(styles.signupArea)}>
      <h2 className={clsx(styles.title)}>회원가입</h2>
      <FormInput.EmailInput
        error={{
          isError: true,
          message: "",
          isDuplicate: true,
        }}
        required
      />
      <FormInput.PasswordInput
        error={{
          isError: true,
          message: "",
        }}
        required
      />
      <FormInput.PasswordInput
        error={{
          isError: true,
          message: "",
        }}
        required
        isConfirm
      />
      <button
        className={clsx(styles.signupButton, {
          [styles.signupButtonDisabled]: isLoading || !singupData,
        })}
        type="submit"
        disabled={isLoading || !singupData}
      >
        {isLoading
          ? "가입중..."
          : !singupData
          ? "데이터를 전부 입력해주세요"
          : "가입하기"}
      </button>
    </div>
  );
}
