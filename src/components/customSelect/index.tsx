import ListModal from "./listModal";
import styles from "./index.module.scss";
import { useEffect, useRef, useState } from "react";

interface OptionType {
  id: number;
  value: string;
}

interface Props {
  options: Array<OptionType>;
  selected?: string;
  defaultOptionMessage?: string;
}

/**
 * @param options - 선택될 아이템 객체입니다.
 * @param selected - 선택적인 값이며, 존재한다면 초깃값으로 사용됩니다.
 * @param defaultOptionMessage - selected 값이 존재해도 초깃값으로 사용하지 않고 해당 메시지를 보여줍니다.
 * @description
 *  1. selected에 존재하지 않는 값이 넘어온다면 가장 첫 번째 값이 초깃값이 됩니다.
 *  2. option 선택 창인 ListModal이 열릴 시 배경의 스크롤 이벤트는 동작하지 않습니다.
 *  3. 또한 option을 선택하거나 배경을 클릭한다면 ListModal은 종료됩니다.
 */
export default function CustomSelect({
  options,
  selected = "",
  defaultOptionMessage,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<OptionType>({
    id: 0,
    value: selected,
  });
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    for (let i = 0; i < options.length; i++) {
      const option = options[i];

      // 초기 안내 문구가 존재한다면 우선적으로 선택됩니다.
      if (defaultOptionMessage) {
        setSelectedOption({ id: -1, value: defaultOptionMessage });
        setFocusedIndex(-1);
        break;
      }

      // selected 값이 props로 전달되지 않는다면 첫 번째 option을 선택합니다.
      if (selected === "") {
        setSelectedOption(option);
        break;
      }

      // selected 값이 props로 전달됐고 option.value와 일치하는 값이 있다면 선택합니다.
      if (option.value === selected) {
        setSelectedOption(option);
        setFocusedIndex(i + 1);
        break;
      }

      // 모든 조건을 통과해 selected와 일치하는 값조차 없다면 가장 첫 번째 option을 선택합니다.
      setSelectedOption(options[0]);
      setFocusedIndex(0);
    }
  }, [selected, options]);

  const toggleOpen = () => {
    setIsOpen((open) => !open);
  };

  const handleSelect = (option: OptionType) => {
    setSelectedOption(option);
    toggleOpen();
  };

  /**
   * @description
   *  1. 위, 아래 방향 키로 조절합니다.
   *  2. Enter, Tab 키를 이용해 option 값을 선택합니다.
   *  3. ESC 키를 이용해 종료합니다.
   */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLUListElement>) => {
    switch (e.key) {
      case "ArrowUp":
        setFocusedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        break;
      case "ArrowDown":
        setFocusedIndex((prevIndex) =>
          Math.min(prevIndex + 1, options.length - 1)
        );
        break;
      case "Enter":
        setSelectedOption(options[focusedIndex]);
        setIsOpen(false);
        break;
      case "Tab":
        setSelectedOption(options[focusedIndex]);
        setIsOpen(false);
        break;
      case "Escape":
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  /**
   * @description
   *  1. ListModal이 열리지 않은 상태에서 위, 아래 방향 키를 조절하여 selectedOption 값을 변경합니다.
   *  2. Enter 키를 누를 시 ListModal이 열립니다.
   */
  const handleOuterSelectKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case "ArrowUp":
        setFocusedIndex((prevIndex) => {
          const newIndex = Math.max(prevIndex - 1, 0);
          setSelectedOption(options[newIndex]);
          return newIndex;
        });
        break;
      case "ArrowDown":
        setFocusedIndex((prevIndex) => {
          const newIndex = Math.min(prevIndex + 1, options.length - 1);
          setSelectedOption(options[newIndex]);
          return newIndex;
        });
        break;
      case "Enter":
        setIsOpen(true);
        break;
      default:
        break;
    }
  };

  // 셀렉트 리스트 포커스 제어
  useEffect(() => {
    const listElement = listRef.current;
    const isListOpen = isOpen;
    const activeIndex = defaultOptionMessage ? focusedIndex + 1 : focusedIndex;
    const focusedChild = listElement && listElement.children[activeIndex];
    const isFocusedChildHTMLElement = focusedChild instanceof HTMLElement;

    if (
      listElement &&
      isListOpen &&
      focusedChild &&
      isFocusedChildHTMLElement
    ) {
      focusedChild.focus();
    }
  }, [isOpen, focusedIndex]);

  // 스크롤 동작 제어
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className={styles.selectArea}>
      <div
        className={styles.selectWrapper}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        tabIndex={0} // 키보드 탐색 제어, 0: focus 가능, -1: 포커스 불가능
        onClick={toggleOpen}
        onKeyDown={handleOuterSelectKeyDown}
      >
        {selectedOption.value}
      </div>
      {isOpen && (
        <>
          <div
            className={styles.modalBackground}
            onClick={() => setIsOpen(false)}
          ></div>
          <ListModal
            ref={listRef}
            options={options}
            onClick={handleSelect}
            focusedIndex={focusedIndex}
            onKeyDown={handleKeyDown}
            defaultOptionMessage={defaultOptionMessage}
          />
        </>
      )}
    </div>
  );
}
