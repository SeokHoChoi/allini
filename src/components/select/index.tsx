import MenuItem from "./menuItem";
import SelectMain from "./selectMain";
import SelectLabel from "./selectLabel";

/**
 * Select 컴포넌트는 사용자 정의 가능한 드롭다운 메뉴를 제공합니다.
 * SelectMain에서 기능을 확장하며 다음과 같은 중첩된 컴포넌트를 포함합니다:
 * - Label: 드롭다운에 레이블을 추가하는 컴포넌트입니다.
 * - Option: 드롭다운에서 개별적으로 선택 가능한 옵션을 정의하는 컴포넌트입니다.
 *
 * @namespace Select
 * @extends SelectMain
 *
 * @property {Component} Label - 드롭다운에 레이블을 추가하는 컴포넌트입니다.
 * @property {Component} Option - 개별 선택 가능한 옵션을 정의하는 컴포넌트입니다.
 *
 * @see SelectMain
 * @see SelectLabel
 * @see MenuItem
 *
 * @example
 * tsx
 * import { Select } from './components';
 *
 * const MySelect = () => {
 *   return (
 *     <Select>
 *       <Select.Label>옵션을 선택하세요:</Select.Label>
 *       <Select.Option>옵션 1</Select.Option>
 *       <Select.Option>옵션 2</Select.Option>
 *       추가적인 옵션들...
 *     </Select>
 *   );
 * };
 *
 */
export const Select = Object.assign(SelectMain, {
  Label: SelectLabel,
  Option: MenuItem,
});

export default Select;
