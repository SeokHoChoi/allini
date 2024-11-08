import React, { useState } from "react";
import clsx from "clsx";
import Invisible from "@assets/icons/pw-invisible.svg";
import Visible from "@assets/icons/pw-visible.svg";
import styles from "./index.module.scss";
import { useLocation } from "react-router-dom";

interface PasswordInputProps {
  error?: {
    isError: boolean;
    message: string;
  };
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isConfirm?: boolean; // 비밀번호 재확인 입력인지 여부
}

export default function PasswordInput({
  error = { isError: false, message: "" },
  required = false,
  onChange,
  isConfirm = false,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const { pathname } = useLocation();
  const isSignup = pathname === "/signup";

  const togglePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const getPlaceholder = () => {
    if (!isSignup) return "비밀번호";
    return isConfirm ? "비밀번호를 재입력해주세요" : "비밀번호를 입력해주세요";
  };

  const getLabel = () => {
    return isConfirm ? "비밀번호 재확인" : "비밀번호";
  };

  const getErrorMessage = () => {
    // error.message가 있으면 우선적으로 보여줌
    if (error.message) return error.message;

    // error.message가 없을 경우 기본 에러 메시지 표시
    if (isSignup) {
      return isConfirm
        ? "위에 입력한 비밀번호와 다르게 입력했어요. 다시 한 번 확인해주세요."
        : "영문, 숫자, 특수문자를 포함하여 8자 이상 입력해주세요.";
    }

    // 로그인 페이지의 경우 빈 문자열 반환
    return "";
  };

  return (
    <div
      className={clsx(styles.container, {
        [styles.signupContainer]: isSignup,
      })}
    >
      {isSignup && (
        <label
          className={clsx(styles.label, {
            [styles.errorLabel]: error.isError,
          })}
        >
          {getLabel()} <span className={styles.required}>*</span>
        </label>
      )}
      <div
        className={clsx(styles.inputWrapper, {
          [styles.errorInput]: error.isError,
          [styles.signupInput]: isSignup,
        })}
      >
        <input
          className={clsx(styles.input, {
            [styles.errorInput]: error.isError,
            [styles.signupInput]: isSignup,
          })}
          type={showPassword ? "text" : "password"}
          name={isConfirm ? "passwordConfirm" : "password"}
          placeholder={getPlaceholder()}
          required={required}
          onChange={onChange}
        />
        <button
          className={clsx(styles.toggleButton)}
          onClick={togglePasswordVisibility}
          type="button"
        >
          {showPassword ? <Visible /> : <Invisible />}
        </button>
      </div>
      {error.isError && (
        <p className={clsx(styles.errorMessage)}>{getErrorMessage()}</p>
      )}
    </div>
  );
}
