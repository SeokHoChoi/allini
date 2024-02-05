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

  // 임시 테스트
  const arr: any = [];
  for (let i = 0; i < btnsCountPerRange; i++) {
    arr.push(i);
  }

  return <div></div>;
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
