import { useEffect } from "react";

interface Props {
  keyword: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
}

export default function SearchBar({ keyword, onChange, onFocus }: Props) {
  return (
    <fieldset>
      <legend>검색</legend>
      <span>
        <label htmlFor="query">
          <input
            type="text"
            title="Allini 검색어 입력"
            id="query"
            name="query"
            maxLength={80}
            autoComplete="off"
            onFocus={onFocus}
            onChange={onChange}
            value={keyword}
            onClick={(e) => e.stopPropagation()}
          />
          <button role="img" aria-label="검색">
            🔍
          </button>
        </label>
      </span>
    </fieldset>
  );
}
