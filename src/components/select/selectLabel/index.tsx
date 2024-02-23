import { ReactNode } from "react";

interface SelectLabelProps {
  children?: ReactNode;
}

/**
 * @description 사용하실 Select Box의 라벨입니다.
 */
export default function SelectLabel({ children }: SelectLabelProps) {
  return <div>{children}</div>;
}
