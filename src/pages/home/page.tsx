import React, { useEffect, useState } from "react";
import SearchPanel from "../../components/searchPanel";
import useDebounce from "../../hooks/useDebounce";
import { useApi } from "../../context/apiContext";

interface SnackItem {
  id: number;
  content: string;
  allergy: boolean;
  snack: string;
}

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [snackList, setSnackList] = useState([]);
  const api = useApi();

  const searched = useDebounce(keyword);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const searchSnackApi = async () => {
    const snack = await api.searchSnack(`?domain=snack&query=${searched}`);
    if (searched) {
      setSnackList(snack);
    } else {
      setSnackList(snack.slice(0, 3));
    }
  };

  useEffect(() => {
    searchSnackApi();
  }, [searched]);

  return (
    <div>
      <SearchPanel<SnackItem>
        storageKey={"home"}
        keyword={keyword}
        itemsList={snackList}
        onChange={handleSearch}
        displayPropertyName={"snack"}
      />
    </div>
  );
}
