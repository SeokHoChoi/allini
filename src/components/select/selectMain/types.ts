import { JSXElementConstructor, ReactElement, ReactNode } from "react";

export interface SelectMainProps {
  children?: ReactNode;
  value: number | string | undefined;
  onChange: (value: string | number | undefined) => void;
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
