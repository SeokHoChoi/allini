import { ReactNode } from "react";
import { isChildDisabled } from "./isChildDisabled";

/**
 * @param newIndex - 계산된 새 인덱스
 * @param listChildLength - 리스트의 자식 수
 * @param count - 비활성화된 아이템의 개수
 * @param calChild - 렌더링된 MenuItem 엘리먼트
 * @param direction - 이동 방향 (+1 또는 -1)
 * @returns 최종 계산된 인덱스
 * @description 비활성화된 아이템을 고려한 최종 인덱스를 계산합니다.
 */
export const calculateFinalIndex = (
  newIndex: number,
  listChildLength: number,
  count: number,
  calChild: ReactNode,
  direction: number
): number => {
  let calNewIndex = Math.max(0, Math.min(newIndex, listChildLength - 1));

  if (isChildDisabled(calChild)) {
    if (direction > 0) {
      if (calNewIndex === listChildLength - 1) {
        calNewIndex = calNewIndex - count;
      }
    } else {
      if (calNewIndex === 0) {
        calNewIndex = calNewIndex + count;
      }
    }
  }

  return calNewIndex;
};
