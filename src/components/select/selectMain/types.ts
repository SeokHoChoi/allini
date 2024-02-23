import {
  ChangeEvent,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
} from "react";

export interface SelectMainProps {
  children?: ReactNode;
  value: number | string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface MenuItemProps {
  children?: ReactNode;
  value?: number | string;
  focused: boolean;
  disabled?: boolean;
  currentValue?: string | number;
}

export type SelectedMenuItem = string | ReactNode;

export type focusedChildType = ReactElement<
  MenuItemProps,
  string | JSXElementConstructor<any>
>;
