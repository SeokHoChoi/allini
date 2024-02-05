import { useEffect, useState } from "react";

interface Props {
  totalItemsCount?: number;
  totalPage?: number;
  itemsCountPerPage: number;
  activePage: number;
  pageRangeDisplayed: number;
  onChange: () => void;
}
export default function Pagination({
  totalItemsCount,
  totalPage,
  itemsCountPerPage,
  activePage,
  pageRangeDisplayed,
  onChange,
}: Props) {
  const [btnsCountPerRange, setBtnsCountPerRange] =
    useState(pageRangeDisplayed);
  const [currentPage, setCurrentPage] = useState(activePage);
  const [rangePhase, setRangePhase] = useState(1);
  const [btnsArr, setBtnsArr]: any = useState<number[]>([]);

  /** 총 버튼의 수 */
  let btnsCalculated: number = 0;
  /** 총 아이템 수 */
  let totalItems = 0;
  if (totalPage) {
    btnsCalculated = totalPage;

    if (!totalItemsCount) {
      totalItems = totalPage * itemsCountPerPage;
    }
  } else {
    btnsCalculated = Math.ceil((totalItemsCount as number) / itemsCountPerPage);
    totalItems = totalItemsCount as number;
  }
  /** btnsCalculated 를 몇개의 페이지로 나눌지에 대한 변수 */
  const pageRangeCount = Math.ceil(btnsCalculated / pageRangeDisplayed);

  useEffect(
    function calRangePhase() {
      /** pageRangeCount 의 phase 계산 */
      setRangePhase(Math.ceil(currentPage / pageRangeDisplayed));
    },
    [currentPage]
  );

  useEffect(() => {
    const btnsArr: Array<number> = [];
    for (
      let i = pageRangeDisplayed * rangePhase - (pageRangeDisplayed - 1);
      i <=
      (btnsCalculated < pageRangeDisplayed * rangePhase
        ? btnsCalculated
        : pageRangeDisplayed * rangePhase);
      i++
    ) {
      btnsArr.push(i);
    }
    setBtnsCountPerRange(
      btnsCountPerRange + pageRangeDisplayed > btnsCalculated
        ? btnsCalculated
        : btnsCountPerRange + pageRangeDisplayed
    );
    setBtnsArr([...btnsArr]);
  }, [rangePhase]);
  console.log(currentPage);
  return (
    <div>
      <button onClick={() => setCurrentPage(1)}>끝까지</button>
      <button
        onClick={() => {
          if (currentPage === 1) {
            return;
          }

          setCurrentPage((prev) => prev - 1);
        }}
      >
        이전
      </button>
      {btnsArr.map((item: number) => {
        return (
          <button key={item} onClick={() => setCurrentPage(item)}>
            {item}
          </button>
        );
      })}
      <button
        onClick={() => {
          if (currentPage === btnsCalculated) {
            return;
          }

          setCurrentPage((prev) => prev + 1);
        }}
      >
        다음
      </button>
      <button onClick={() => setCurrentPage(btnsCalculated)}>끝까지</button>
    </div>
  );
}

/**
 * 
    totalItemsCount: 총 아이템 수
    totalPage: 전체 페이지 수
    itemsCountPerPage: 페이지당 보여질 아이템 수
    activePage: 현재 페이지
    pageRangeDisplayed: 한 번에 보여질 총 페이지
    onChange: 페이지 변경 함수
 */
