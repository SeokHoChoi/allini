import React, { useEffect, useState } from "react";
import SearchPanel from "@ui/searchPanel";
import useDebounce from "@hooks/useDebounce";
import { useApi } from "@contexts/apiContext";
import clsx from "clsx";
import styles from "./index.module.scss";
import Footer from "@widgets/footer";

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
    <div className={clsx(styles.homeArea)}>
      <div className={clsx(styles.intro)}>상단</div>
      <div className={clsx(styles.contentWrapper)}>
        <div className={clsx(styles.middleContent)}>
          <h3>사료나 간식 정보를 기록해요</h3>
          <p>
            강아지가 먹은 사료나 간식에 대한 정보를 입력하고 저장해보세요. 한 번
            입력된 제품은 이후에도 쉽게 선택해서 사용할 수 있어요.
          </p>
          {/* TODO:  사료/간식 정보 기록하는 화면에 대한 이미지 추가 예정 */}
          <div className={clsx(styles.infoImgWrapper)}>추후 이미지 추가</div>
        </div>
        <div className={clsx(styles.bottomContent)}>
          <Footer />
        </div>
      </div>
      {/* TODO: 디자인 시안 완성 후 사용여부 결정 */}
      {/* <SearchPanel<SnackOrFood>
        storageKey={"home"}
        keyword={keyword}
        itemsList={searchList}
        changeSearchType={handleSearchType}
        onChange={handleSearch}
        searchType={searchType}
      /> */}
    </div>
  );
}
