import React from "react";
import clsx from "clsx";
import styles from "./index.module.scss";

interface EmailInputProps {
  error?: {
    isError: boolean;
    message: string;
  };
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function EmailInput({
  error = { isError: false, message: "" },
  required = false,
  onChange,
}: EmailInputProps) {
  return (
    <div className={clsx(styles.container)}>
      <input
        className={clsx(styles.input, {
          [styles.errorInput]: error.isError,
        })}
        type="email"
        name="email"
        placeholder="이메일"
        required={required}
        onChange={onChange}
      />
      {error.isError && (
        <p className={clsx(styles.errorMessage)}>{error.message}</p>
      )}
    </div>
  );
}
