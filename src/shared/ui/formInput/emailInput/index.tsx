import React from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import { useLocation } from "react-router-dom";

interface EmailInputProps {
  error?: {
    isError: boolean;
    message: string;
    isDuplicate?: boolean;
  };
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function EmailInput({
  error = { isError: false, message: "", isDuplicate: false },
  required = false,
  onChange,
}: EmailInputProps) {
  const { pathname } = useLocation();
  const isSignup = pathname === "/signup";

  const getErrorMessage = () => {
    if (isSignup && error.isDuplicate) {
      return "중복된 이메일입니다.";
    }
    return error.message;
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
          이메일 <span className={styles.required}>*</span>
        </label>
      )}
      <input
        className={clsx(styles.input, {
          [styles.errorInput]: error.isError,
          [styles.signupInput]: isSignup,
        })}
        type="email"
        name="email"
        placeholder={isSignup ? "이메일을 입력해주세요" : "이메일"}
        required={required}
        onChange={onChange}
      />
      {error.isError && (
        <p className={clsx(styles.errorMessage)}>{getErrorMessage()}</p>
      )}
    </div>
  );
}
