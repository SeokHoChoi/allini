import { forwardRef } from "react";
import styles from "./index.module.scss";

interface OptionType {
  id: number;
  value: string;
}

interface ListModalProps {
  options: Array<OptionType>;
  onClick: (value: OptionType) => void;
  focusedIndex: number;
  onKeyDown: (e: React.KeyboardEvent<HTMLUListElement>) => void;
  defaultOptionMessage?: string;
}

const ListModal = forwardRef<HTMLUListElement, ListModalProps>(
  (
    { options, onClick, focusedIndex, onKeyDown, defaultOptionMessage },
    ref
  ) => {
    return (
      <ul
        role="listbox"
        ref={ref}
        onKeyDown={onKeyDown}
        className={styles.listArea}
      >
        {defaultOptionMessage && (
          <li role="option" tabIndex={-1} aria-disabled="true">
            {defaultOptionMessage}
          </li>
        )}
        {options.map((option: OptionType, index: number) => {
          return (
            <li
              role="option"
              aria-selected={focusedIndex === index}
              key={option.value}
              onClick={() => onClick(option)}
              tabIndex={focusedIndex === index ? 0 : -1}
            >
              {option.value}
            </li>
          );
        })}
      </ul>
    );
  }
);

export default ListModal;
