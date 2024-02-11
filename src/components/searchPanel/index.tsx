import { useState } from "react";
import { getItem } from "../../utils/getItem";
import { setItem } from "../../utils/setItem";
import SearchBar from "./searchBar";
import { useNavigate } from "react-router-dom";
import { useSearchModal } from "../../context/searchModalContext";
import SearchModal from "./searchModal";

interface DataType {
  id: number;
  snack?: string; // 간식
  feed?: string; // 사료
  content: string;
  allergy: boolean;
}

interface Props {
  storageKey: string;
  keyword: string;
  itemsList: Array<DataType>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  displayPropertyName: keyof DataType;
}

export default function SearchPanel({
  storageKey,
  keyword,
  itemsList,
  onChange,
  displayPropertyName,
}: Props) {
  const [searchList, setSearchList] = useState<string[]>([]);
  const { state, actions } = useSearchModal();
  const { isOpen } = state;
  const { setIsOpen } = actions;

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 1. 페이지 이동
    const queryParams = new URLSearchParams({
      domain: displayPropertyName,
      query: keyword,
    });
    navigate({
      pathname: "/pet-food-items/search",
      search: `?${queryParams}`,
    });

    // 2. 검색어 저장
    if (keyword === "") return;
    const items = getItem(storageKey) || [];
    const newSearchList = items.filter((item: string) => item !== keyword);
    newSearchList.unshift(keyword);
    setItem(storageKey, newSearchList);
    setSearchList(newSearchList);
    setIsOpen(false);
  };

  const showLatestSearchList = () => {
    const items = getItem(storageKey) ? getItem(storageKey) : [];
    setSearchList([...items]);
    setIsOpen(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <SearchBar
        keyword={keyword}
        onChange={onChange}
        onFocus={showLatestSearchList}
      />
      {isOpen && (
        <SearchModal
          keyword={keyword}
          searchList={searchList}
          itemsList={itemsList}
          storageKey={storageKey}
          setSearchList={setSearchList}
          displayPropertyName={displayPropertyName}
          handlePanel={() => setIsOpen(false)}
        />
      )}
    </form>
  );
}
