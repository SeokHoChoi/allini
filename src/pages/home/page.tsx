import React, { useEffect, useState } from "react";
import SearchPanel from "../../components/searchPanel";
import useDebounce from "../../hooks/useDebounce";
import { useApi } from "../../contexts/apiContext";

interface ItemBase {
  id: number;
  content: string;
  allergy: boolean;
}

interface SnackItem extends ItemBase {
  snack: string;
}

interface FoodItem extends ItemBase {
  food: string;
}

type SnackOrFood = SnackItem | FoodItem;

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [searchType, setSearchType] = useState("snack");
  const [searchList, setSearchList] = useState([]);
  const api = useApi();

  const searched = useDebounce(keyword);

  const handleSearchType = (type: string) => {
    setSearchType(type);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const searchFeedApi = async () => {
    const searchFeed =
      searchType === "snack" ? api.searchSnack : api.searchFood;
    const feed = await searchFeed(`?domain=${searchType}&query=${searched}`);

    const searchedItem = searched ? feed : feed.slice(0, 3);
    setSearchList(searchedItem);
  };

  useEffect(() => {
    searchFeedApi();
  }, [searched, searchType]);

  return (
    <div>
      <SearchPanel<SnackOrFood>
        storageKey={"home"}
        keyword={keyword}
        itemsList={searchList}
        changeSearchType={handleSearchType}
        onChange={handleSearch}
        searchType={searchType}
      />
    </div>
  );
}
