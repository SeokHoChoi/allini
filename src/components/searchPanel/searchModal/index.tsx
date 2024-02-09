import { useNavigate } from "react-router-dom";
import { setItem } from "../../../utils/setItem";
import { filterKeyword } from "../../../utils/filterKeyword";

interface DataType {
  id: number;
  snack: string;
  content: string;
  allergy: boolean;
}

interface Props {
  keyword: string;
  searchList: Array<string>;
  snackList: Array<DataType>;
  storageKey: string;
  setSearchList: React.Dispatch<React.SetStateAction<Array<string>>>;
  handlePanel: () => void;
}

export default function SearchModal({
  keyword,
  searchList,
  snackList,
  storageKey,
  setSearchList,
  handlePanel,
}: Props) {
  const navigate = useNavigate();

  const handleDeleteKeyword = (keyword: string) => {
    const newSearchList = filterKeyword(keyword, searchList);
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
          {snackList.map((snack: DataType) => {
            return (
              <li
                key={snack.id}
                onClick={() => navigate(`/pet-food-items/goods/${snack.id}`)}
              >
                <span>{snack.snack}</span>
                <span>{snack.content}</span>
                <span>{snack.allergy.toString()}</span>
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
