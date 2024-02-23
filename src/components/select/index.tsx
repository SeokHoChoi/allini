import MenuItem from "./menuItem";
import SelectMain from "./selectMain";
import SelectLabel from "./selectLabel";

export const Select = Object.assign(SelectMain, {
  Label: SelectLabel,
  Option: MenuItem,
});

export default Select;
