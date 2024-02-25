import { ReactElement, ReactNode, isValidElement } from "react";
import { hasProp } from "./hasProp";

/**
 * @param focusedChild - 포커스된 MenuItem
 * @returns MenuItem이 비활성화되었는지 여부
 * @description MenuItem이 비활성화되었는지 확인합니다.
 */
export const isChildDisabled = (focusedChild: ReactNode): boolean => {
  return (
    isValidElement(focusedChild) &&
    hasProp<{ disabled: ReactNode }>(focusedChild.props, "disabled") &&
    focusedChild.props.disabled === true
  );
};
