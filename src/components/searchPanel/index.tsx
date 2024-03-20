import { useState } from "react";
import { getItem } from "../../utils/getItem";
import { setItem } from "../../utils/setItem";
import SearchBar from "./searchBar";
import { useNavigate } from "react-router-dom";
import { useSearchModal } from "../../contexts/searchModalContext";
import SearchModal from "./searchModal";

interface DataType {
  id: number;
  content: string;
  allergy: boolean;
}

interface Props<T> {
  storageKey: string;
  keyword: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  itemsList: Array<T>;
  changeSearchType: (type: string) => void;
  searchType: string;
}

export default function SearchPanel<T extends DataType>({
  storageKey,
  keyword,
  itemsList,
  onChange,
  changeSearchType,
  searchType,
}: Props<T>) {
  const [searchList, setSearchList] = useState<string[]>([]);
  const { state, actions } = useSearchModal();
  const { isOpen } = state;
  const { setIsOpen } = actions;

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 1. 페이지 이동
    const queryParams = new URLSearchParams({
      domain: searchType as string,
      query: keyword,
    });
    navigate({
      pathname: `/${searchType}-list`,
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
      <select
        value={searchType}
        onChange={(e) => changeSearchType(e.target.value)}
      >
        {["snack", "food"].map((feed) => (
          <option key={feed} value={feed}>
            {feed}
          </option>
        ))}
      </select>

      <SearchBar
        keyword={keyword}
        onChange={onChange}
        onFocus={showLatestSearchList}
      />
      {isOpen && (
        <SearchModal<T>
          keyword={keyword}
          searchList={searchList}
          itemsList={itemsList}
          storageKey={storageKey}
          setSearchList={setSearchList}
          handlePanel={() => setIsOpen(false)}
          searchType={searchType}
        />
      )}
    </form>
  );
}
