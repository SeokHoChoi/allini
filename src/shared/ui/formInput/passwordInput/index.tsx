import React, { useState } from "react";
import clsx from "clsx";
import Invisible from "@assets/icons/pw-invisible.svg";
import Visible from "@assets/icons/pw-visible.svg";
import styles from "./index.module.scss";

interface PasswordInputProps {
  error?: {
    isError: boolean;
    message: string;
  };
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PasswordInput({
  error = { isError: false, message: "" },
  required = false,
  onChange,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className={clsx(styles.container)}>
      <div
        className={clsx(styles.inputWrapper, {
          [styles.errorInput]: error.isError,
        })}
      >
        <input
          className={clsx(styles.input, {
            [styles.errorInput]: error.isError,
          })}
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="비밀번호"
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
        <p className={clsx(styles.errorMessage)}>{error.message}</p>
      )}
    </div>
  );
}
