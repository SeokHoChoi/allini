import { ReactNode, useEffect, useId, useState } from "react";

interface MenuItemProps {
  children?: ReactNode;
  value?: number | string;
  focused?: boolean;
  disabled?: boolean;
  currentValue?: string | number;
}

/**
 *
 * @param children - 태그의 자식으로 넣어주세요.
 * @param value - 서버로 요청할 값입니다. 필수로 넣어주세요! Select에 넣는 value값과 함께 사용됩니다.
 * @param focused - 현재 포커싱 됐는지 상태를 나타냅니다. Select에서 children 쪽으로 주입해 줍니다!
 * @param disabled - 선택할 수 없습니다. 예외적으로 currentValue 값과 value 값이 일치 시 처음 한 번 선택 가능합니다.
 * @param currentValue - currentValue는 Select가 받은 value prop입니다.
 * @returns
 * @description
 *  1. value 값은 선택적으로 받았으며, children과 달리 undefined또한 할당 가능하도록 처리했습니다.
 */
export default function MenuItem({
  children,
  value = "",
  focused,
  disabled = false,
  currentValue,
}: MenuItemProps) {
  const [isSelected, setIsSelected] = useState(false);
  const [tabIndex, setTabIndex] = useState(-1);
  const id = useId();

  useEffect(() => {
    const isSelected = currentValue === value;
    const isFocused = !disabled && focused ? 0 : -1;
    setTabIndex(isFocused);
    setIsSelected(isSelected);
  }, [currentValue, focused]);

  return (
    <li
      key={id}
      role="option"
      value={value}
      tabIndex={tabIndex}
      aria-selected={isSelected}
      // 임시
      style={{
        color: `${disabled ? "gray" : "red"}`,
        background: `${isSelected ? "black" : "white"}`,
      }}
    >
      <input type="text" readOnly value={value} style={{ display: "none" }} />
      {children}
    </li>
  );
}
