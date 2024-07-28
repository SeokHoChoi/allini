import styles from "./button.module.scss";

interface ButtonProps {
  clickHandler: () => void;
  className: string;
  label: string;
}

export default function Button({
  className = styles.button_bg,
  clickHandler,
  label,
}: ButtonProps) {
  return (
    <button className={className} onClick={clickHandler}>
      {label}
    </button>
  );
}
