import React, { ReactNode, useEffect, useState } from "react";

interface ListItemProps {
  key?: never;
  selected?: boolean;
  defaultOptionMessage?: boolean;
  value: string;
  onClick?: any;
  focused?: boolean;
  children: ReactNode;
  setDefaultMessage?: React.Dispatch<React.SetStateAction<string>>;
  setSelectedOption?: React.Dispatch<React.SetStateAction<string>>;
  handleSelect?: (option: any, value: any) => void;
  isOpen?: boolean;
  currentValue?: any;
}

export default function ListItem({
  defaultOptionMessage = false,
  key,
  value,
  onClick = () => {},
  focused,
  children,
  selected = false,
  setDefaultMessage,
  setSelectedOption,
  handleSelect = (option: any, value: any) => {},
  isOpen,
  currentValue,
}: ListItemProps) {
  const childrenString = React.Children.toArray(children).join("");
  const [defaultSelected, setDefaultSelected] = useState(false); // 기본적으로 선택한 값이 왔나?
  const [test, setTest] = useState(false); // 기본 설명값이 왔나?

  useEffect(() => {
    if (selected && defaultOptionMessage) {
      setDefaultSelected(false);
      setTest(true);
    }

    if (selected && !defaultOptionMessage) {
      setDefaultSelected(false);
      setTest(true);
    }

    if (!selected && defaultOptionMessage) {
      setDefaultSelected(true);
      setTest(false);
    }
    if (!selected && !value && defaultOptionMessage) {
      setDefaultSelected(true);
      setTest(false);
      handleSelect(childrenString, value);
    }
  }, []);

  useEffect(() => {
    if (setSelectedOption && setDefaultMessage) {
      if (defaultSelected) {
        setSelectedOption(childrenString);
        setDefaultMessage(childrenString);
        onClick(value);
      }

      if (test) {
        setSelectedOption(childrenString);
        setDefaultMessage(childrenString);
        onClick(value);
      }

      setDefaultSelected(false);
      setTest(false);

      // else {
      //   setSelectedOption(childrenString);
      //   setDefaultMessage("");
      //   onClick(value);
      // }
    }
  }, []);

  const handleClick = () => {
    if (setSelectedOption) {
      setSelectedOption(childrenString);
    }
    handleSelect(childrenString, value);
    onClick(value);
  };

  const [color, setColor] = useState("red");
  useEffect(() => {
    const tess = currentValue === value ? "yellow" : "red";
    setColor(tess);
  }, [value]);
  return (
    <li
      role="option"
      key={key ? key : value}
      onClick={handleClick}
      tabIndex={focused ? 0 : -1}
      aria-selected={focused}
      style={{
        color: color,
        background: "green",
        display: "inline-block",
        width: "100%",
      }}
    >
      {children}
    </li>
  );
}
