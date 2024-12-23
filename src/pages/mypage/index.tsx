import { useState } from "react";
import Select from "@ui/select";

export default function Mypage() {
  // 내 정보 수정, 등록된 사료/간식, 일간/월간, 즐겨찾기 -> 이렇게 네 개의 탭으로 나눌 예정.
  const [value, setValue] = useState<string | number | undefined>(2);
  function handleSelectedValue(value: string | number | undefined) {
    setValue(value);
  }

  return (
    <div>
      <Select value={value} onChange={handleSelectedValue}>
        <Select.Label>사료/간식</Select.Label>
        <Select.Option>골라주세요!</Select.Option>
        <Select.Option value={1}>안녕1</Select.Option>
        <Select.Option value={2} disabled>
          안녕2
        </Select.Option>
        <Select.Option value={3}>안녕3</Select.Option>
      </Select>
    </div>
  );
}
