/**
 * @description  제공된 객체에 특정 속성이 있는지 확인하는  타입  가드 함수입니다.
 * @param obj 확인할 객체
 * @param propName 확인할 속성  이름
 * @returns 속성이 있는  경우 true, 없는  경우 false
 * @description
 *  - 사용 예시: hasProp<{ prop 명: prop 타입 }>(obj, "prop 명")
 *      - hasProp<{ disabled: ReactNode }>(obj, "disabled")
 */
export function hasProp<T>(obj: any, propName: keyof T): obj is T {
  return obj && propName in obj;
}
