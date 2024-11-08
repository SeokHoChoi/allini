import {
  Children,
  ReactElement,
  ReactNode,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./index.module.scss";

interface ListItemProps {
  value: string;
  focused: boolean;
  children: ReactNode;
  setDefaultMessage: React.Dispatch<React.SetStateAction<string>>;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  handleSelect: (option: any, value: any) => void;
  isOpen: boolean;
  currentValue: any;
  selected?: boolean;
  defaultOptionMessage?: boolean;
}

interface ListModalProps {
  children: ReactElement<ListItemProps>[];
  value: string | number;
  onChagne: (value: any) => void;
}

const ListModal = ({ children, value, onChagne }: ListModalProps) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [defaultMessage, setDefaultMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [focusedIndex, setFocusedIndex] = useState(0);
  const [listLength, setListLength] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);
  const selectWrapperRef = useRef<HTMLDivElement>(null);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    const focusedChild =
      listItems.find((item) => {
        return isValidElement(item) && item.props.selected === true;
      }) ||
      listItems.find((item) => {
        return isValidElement(item) && item.props.defaultOptionMessage === true;
      }) ||
      listItems[0];

    if (defaultMessage) {
      setSelectedOption(defaultMessage);
      onChagne(focusedChild.props.value);
      setDefaultMessage("");
    } else {
      setSelectedOption(focusedChild.props.children as string);
    }
  }, [defaultMessage]);

  const toggleOpen = () => {
    setIsOpen((open) => !open);
  };

  const handleSelect = (option, value) => {
    setIsSelected(true);
    onChagne(value);
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
    // Tab 기본동작 prevent
    e.preventDefault();

    // 포커스된  인덱스에  해당하는  자식  요소를 찾음
    const focusedChild = listItems[focusedIndex];

    switch (e.key) {
      case "ArrowUp":
        setFocusedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        break;
      case "ArrowDown":
        setFocusedIndex((prevIndex) => Math.min(prevIndex + 1, listLength - 1));
        break;
      case "Enter":
        // focusedChild의 children prop을 setSelectedOption에  전달
        setSelectedOption(focusedChild.props.children as string);
        if (focusedChild && "value" in focusedChild.props) {
          onChagne(focusedChild.props.value);
        }
        setIsSelected(true);

        setIsOpen(false);
        break;
      case "Tab":
        setSelectedOption(focusedChild.props.children as string);
        if (focusedChild && "value" in focusedChild.props) {
          onChagne(focusedChild.props.value);
        }
        setIsSelected(true);
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
          const focusedChild = listItems[newIndex];
          setSelectedOption(focusedChild.props.children as string);
          if (focusedChild && "value" in focusedChild.props) {
            onChagne(focusedChild.props.value);
          }
          setIsSelected(true);

          return newIndex;
        });
        break;
      case "ArrowDown":
        setFocusedIndex((prevIndex) => {
          const newIndex = Math.min(prevIndex + 1, listLength - 1);
          const focusedChild = listItems[newIndex];
          setSelectedOption(focusedChild.props.children as string);
          if (focusedChild && "value" in focusedChild.props) {
            onChagne(focusedChild.props.value);
          }
          setIsSelected(true);

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
    const activeIndex = focusedIndex;
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

  const listItems = Children.map(children, (child, index) => {
    if (isValidElement<ListItemProps>(child)) {
      return cloneElement(child, {
        focused: focusedIndex === index,
        setDefaultMessage,
        handleSelect,
        setSelectedOption,
        isOpen,
        currentValue: value,
      });
    }
    return child;
  });

  useEffect(() => {
    setListLength(Children.count(listItems));
  }, [children]);

  // isSelected로 완전 처음엔 포커싱 X - 첫 화면부터 포커싱 안되도록
  // 무언가 한 번이라도 고른 후에는 포커싱 O (키보드로 동작시만)
  useEffect(() => {
    if (isSelected && !isOpen && selectWrapperRef.current) {
      selectWrapperRef.current.focus();
    }
  }, [isOpen, isSelected]);

  return (
    <div className={styles.selectArea}>
      <div
        className={styles.selectWrapper}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        tabIndex={0} // 키보드 탐색 제어, 0: focus 가능, -1: 포커스 불가능
        onClick={toggleOpen}
        onKeyDown={handleOuterSelectKeyDown}
        ref={selectWrapperRef}
      >
        {selectedOption}
      </div>
      {isOpen && (
        <>
          <div
            className={styles.modalBackground}
            onClick={() => setIsOpen(false)}
          ></div>
          <ul
            role="listbox"
            ref={listRef}
            onKeyDown={handleKeyDown}
            className={styles.listArea}
          >
            {listItems}
          </ul>
        </>
      )}
    </div>
  );
};

export default ListModal;
