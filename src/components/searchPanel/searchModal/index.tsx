import { useNavigate } from "react-router-dom";
import { setItem } from "../../../utils/setItem";

interface DataType {
  id: number;
  snack?: string; // 간식
  feed?: string; // 사료
  content: string;
  allergy: boolean;
}

interface Props {
  keyword: string;
  searchList: Array<string>;
  itemsList: Array<DataType>;
  storageKey: string;
  setSearchList: React.Dispatch<React.SetStateAction<Array<string>>>;
  handlePanel: () => void;
  displayPropertyName: keyof DataType;
}

export default function SearchModal({
  keyword,
  searchList,
  itemsList,
  displayPropertyName,
  storageKey,
  setSearchList,
  handlePanel,
}: Props) {
  const navigate = useNavigate();

  const handleDeleteKeyword = (keyword: string) => {
    const newSearchList = searchList.filter((item: string) => item !== keyword);
    setSearchList(newSearchList);
    setItem(storageKey, newSearchList);
  };

  const clearSearchHistory = () => {
    setSearchList([]);
    setItem(storageKey, []);
    handlePanel();
  };

  return (
    <section>
      <div>
        {!keyword ? (
          <div>
            <h2>최근 검색어</h2>
            <ul>
              {searchList.map((keyword) => (
                <li key={keyword}>
                  <span onClick={() => navigate(`/${keyword}`)}>{keyword}</span>
                  <button onClick={() => handleDeleteKeyword(keyword)}>
                    X
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>임시 - 추천 검색어 예정</div>
        )}

        <ul>
          {itemsList.map((item: DataType) => {
            const displayValue = item[displayPropertyName];

            return (
              <li
                key={item.id}
                onClick={() => navigate(`/pet-food-items/goods/${item.id}`)}
              >
                <span>{displayValue}</span>
                <span>{item.content}</span>
                <span>{item.allergy.toString()}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        {!keyword && (
          <button onClick={clearSearchHistory}>검색기록 삭제</button>
        )}
        <button onClick={() => handlePanel()}>닫기</button>
      </div>
    </section>
  );
}
