import {
  ChangeEvent,
  Children,
  ReactNode,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from "react";
import SelectLabel from "../selectLabel";
import MenuItem from "../menuItem";
import { hasProp } from "../../../utils/hasProp";
import { calculateFinalIndex } from "../../../utils/calculateFinalIndex";
import {
  MenuItemProps,
  SelectMainProps,
  SelectedMenuItem,
  focusedChildType,
} from "./types";
import { isDisabledMenuItem } from "../../../utils/isDisabledMenuItem";

/**
 * SelectLabel 컴포넌트의 타입을 가져옵니다.
 */
const SelectLabelType = (<SelectLabel />).type;
/**
 * 주어진 children에서 SelectLabel 컴포넌트를 찾아 배열로 반환합니다.
 * 최대 2개까지만 반환합니다.
 *
 * @param children - ReactNode로 이루어진 컴포넌트 children
 * @returns SelectLabel 컴포넌트 배열
 */
function getSelectLabels(children: ReactNode) {
  const childrenArray = Children.toArray(children);

  return childrenArray
    .filter((child) => isValidElement(child) && child.type === SelectLabelType)
    .slice(0, 2);
}

/**
 * MenuItem 컴포넌트의 타입을 가져옵니다.
 */
const MenuItemType = (<MenuItem />).type;
/**
 * 주어진 children에서 MenuItem 컴포넌트를 찾아 배열로 반환합니다.
 *
 * @param children - ReactNode로 이루어진 컴포넌트 children
 * @returns MenuItem 컴포넌트 배열
 */
function getMenuItems(children: ReactNode) {
  const childrenArray = Children.toArray(children);

  return childrenArray.filter(
    (child) => isValidElement(child) && child.type === MenuItemType
  );
}

/**
 * @param children - ReactNode로 이루어진 컴포넌트 children
 * @param value - 현재 선택된 값
 * @param onChange - 값 변경 시 호출되는 콜백 함수
 * @description 주어진 children에서 SelectLabel과 MenuItem을 추출하여 필요한 처리를 하는 SelectMain 컴포넌트입니다.
 */
export default function SelectMain({
  children,
  value,
  onChange = () => {},
}: SelectMainProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const initSelectedMenuItem = () => {
    const menuItems = getMenuItems(children);
    /**
     * 주어진 children에서 초기 선택된 MenuItem을 찾아 초기값으로 설정합니다.
     *
     * @param children - ReactNode로 이루어진 컴포넌트 children
     * @param value - 현재 선택된 값
     * @returns 초기 선택된 MenuItem의 children
     * @description 맞는 조건이 없다면 listRef의 0번째 MenuItem의 children 반환
     */
    const initialMenuItem = menuItems.find((child) => {
      return (
        isValidElement<MenuItemProps>(child) && child.props.value === value
      );
    });
    const defaultMenuItem = isValidElement<MenuItemProps>(menuItems[0])
      ? menuItems[0].props.children
      : "";

    return isValidElement<MenuItemProps>(initialMenuItem)
      ? initialMenuItem.props.children || defaultMenuItem
      : defaultMenuItem;
  };
  const [selectedMenuItem, setSelectedMenuItem] = useState<SelectedMenuItem>(
    initSelectedMenuItem()
  );
  const [isSelected, setIsSelected] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);
  const selectWrapperRef = useRef<HTMLDivElement>(null);

  const selectLabels = getSelectLabels(children);
  const menuItems = getMenuItems(children);

  /**
   * MenuItem으로 props 전달 및 렌더링된 MenuItem 배열 반환
   *
   * @returns 렌더링된 MenuItem 배열
   */
  const renderedMenuItems = Children.map(menuItems, (child, index) => {
    if (isValidElement<MenuItemProps>(child)) {
      return cloneElement(child, {
        focused: focusedIndex === index,
        currentValue: value,
      });
    }
    return child;
  });

  /**
   * @description
   *  1. 키보드 이벤트 처리 함수
   *  2. isOpen이 true 일 때 동작합니다. 즉, MenuItem들이 화면에 보일 때 동작합니다.
   */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLUListElement>) => {
    // Tab 기본동작 prevent
    e.preventDefault();

    const listChildLength = renderedMenuItems.length;
    const focusedChild = renderedMenuItems[focusedIndex];

    switch (e.key) {
      case "ArrowUp":
        setFocusedIndex((prevIndex) => {
          const newIndex = getNextValidIndex(prevIndex, -1, listChildLength);

          return newIndex;
        });
        break;

        break;
      case "ArrowDown":
        setFocusedIndex((prevIndex) => {
          const newIndex = getNextValidIndex(prevIndex, +1, listChildLength);

          return newIndex;
        });

        break;
      case "Enter":
        handleMenuItemChange(focusedChild as focusedChildType);
        setIsOpen(false);
        setIsSelected(true);
        break;
      case "Tab":
        handleMenuItemChange(focusedChild as focusedChildType);
        setIsOpen(false);
        setIsSelected(true);
        break;
      case "Escape":
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  /**
   * @param currentIndex - 현재 인덱스
   * @param direction - 이동 방향 (+1 또는 -1)
   * @param listChildLength - 리스트의 자식 수
   * @returns 다음 유효한 인덱스
   * @description 다음 유효한 인덱스를 반환하는 함수
   */
  const getNextValidIndex = (
    currentIndex: number,
    direction: number,
    listChildLength: number
  ): number => {
    let newIndex = currentIndex + direction;
    let count = 0;

    const increment = direction > 0 ? 1 : -1;
    while (newIndex >= 0 && newIndex < listChildLength) {
      const focusedChild = renderedMenuItems[newIndex];
      if (isDisabledMenuItem(focusedChild)) {
        count++;
        newIndex += increment; // disabled items 건너뜁니다!
      } else {
        break;
      }
    }

    const calNewIndex = Math.max(0, Math.min(newIndex, listChildLength - 1));
    const calChild = renderedMenuItems[calNewIndex];

    return calculateFinalIndex(
      newIndex,
      listChildLength,
      count,
      calChild,
      direction
    );
  };

  /**
   * @param focusedChild - 포커스된 MenuItem
   * @description MenuItem 변경 시 처리하는 함수
   */
  const handleMenuItemChange = (
    focusedChild: React.ReactElement<MenuItemProps>
  ) => {
    if (
      isValidElement(focusedChild) &&
      hasProp<{ children: ReactNode }>(focusedChild.props, "children")
    ) {
      const { children, value } = focusedChild.props;
      if (children !== undefined) {
        // Promise.resolve().then(() => {
        onChange({ target: { value } } as ChangeEvent<HTMLInputElement>); // 수정 필요 (InputElement에서 value를 가져오지 않습니다.)
        setSelectedMenuItem(children);
        // });
      }
    }
  };

  useEffect(() => {
    const focusedChild = renderedMenuItems[focusedIndex];
    handleMenuItemChange(focusedChild as focusedChildType);
  }, [focusedIndex]);

  /**
   * @description
   *  1. isOpen이 false 일 때 동작합니다. 즉, MenuItem들이 화면에 보이지 않을 때 동작합니다.
   *  2. 위, 아래 화살표 방향 키를 사용해 MenuItem을 이동 및 선택할 수 있습니다.
   *  3. Enter 키를 이용해 MenuItem을 화면에 보이게 합니다.
   */
  const handleOuterSelectKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const listChildLength = renderedMenuItems.length;

    switch (e.key) {
      case "ArrowUp":
        setFocusedIndex((prevIndex) => {
          const newIndex = getNextValidIndex(prevIndex, -1, listChildLength);

          return newIndex;
        });
        break;
      case "ArrowDown":
        setFocusedIndex((prevIndex) => {
          const newIndex = getNextValidIndex(prevIndex, +1, listChildLength);

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

  /**
   * @param index - 클릭된 아이템의 인덱스
   * @description 클릭된 아이템이 선택되며 ul 태그와 MenuItem 컴포넌트를 언마운트 시킵니다.
   */
  const handleItemClick = (index: number) => {
    const clickedChild = renderedMenuItems[
      index
    ] as React.ReactElement<MenuItemProps>;

    if (!isValidElement(clickedChild)) {
      return;
    }

    const { disabled } = clickedChild.props;

    if (
      !hasProp<{ disabled: ReactNode }>(clickedChild.props, "disabled") ||
      !disabled
    ) {
      handleMenuItemChange(clickedChild);
      setIsSelected(true);
      setFocusedIndex(index);
      setIsOpen(false);
    }
  };

  /**
   * @description
   *  1. 리스트 아이템 클릭 시 처리하는 함수 입니다.
   *  2. 클릭된 아이템의 index를 찾은 후, handleItemClick 함수를 실행하며 파라미터에 index를 넘겨줍니다.
   */
  const handleListItemClick = (
    e: React.MouseEvent<HTMLUListElement, MouseEvent>
  ) => {
    e.stopPropagation();

    const target = e.target as HTMLElement;
    const listItem = target.closest("li");

    if (listItem) {
      const index = Array.from(listItem.parentNode?.children || []).indexOf(
        listItem
      );
      handleItemClick(index);
    }
  };

  /**
   * @description
   *  1. 선택된 상태에서 리스트가 닫혔을 때, selectWrapper에 포커스를 줍니다.
   *  2. 키보드 액션으로 선택시만 동작합니다.
   */
  useEffect(() => {
    if (isSelected && !isOpen && selectWrapperRef.current) {
      selectWrapperRef.current.focus();
    }
  }, [isOpen, isSelected]);

  /**
   * @description
   *  1. 리스트가 열렸을 때, 포커스를 현재 선택된 아이템에 줍니다.
   *  2. 키보드 액션으로 선택시만 동작합니다.
   */
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

  return (
    <div onClick={() => setIsOpen((open) => !open)}>
      {selectLabels && <div>{selectLabels}</div>}
      <div
        onKeyDown={handleOuterSelectKeyDown}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        tabIndex={0}
        ref={selectWrapperRef}
      >
        {selectedMenuItem ? selectedMenuItem : "선택해 주세요."}
      </div>
      {isOpen && (
        <ul
          ref={listRef}
          role="listbox"
          onKeyDown={handleKeyDown}
          onClick={handleListItemClick}
        >
          {renderedMenuItems}
        </ul>
      )}
    </div>
  );
}
