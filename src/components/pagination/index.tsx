import { useEffect, useState } from "react";

interface Props {
  totalItemsCount?: number;
  totalPage?: number;
  itemsCountPerPage: number;
  activePage: number;
  pageRangeDisplayed: number;
  onChange: (btnNum: number) => void;
}
export default function Pagination({
  totalItemsCount,
  totalPage,
  itemsCountPerPage,
  activePage,
  pageRangeDisplayed,
  onChange,
}: Props) {
  /** 현재 보여지는 범위 단계 */
  const [phase, setPhase] = useState(1);

  /** 총 버튼의 수 */
  let totalPageCount: number = 0;
  /** 총 아이템 수 */
  let totalItems = 0;
  if (totalPage) {
    totalPageCount = totalPage;

    if (!totalItemsCount) {
      totalItems = totalPage * itemsCountPerPage;
    }
  } else {
    totalPageCount = Math.ceil((totalItemsCount as number) / itemsCountPerPage);
    totalItems = totalItemsCount as number;
  }

  useEffect(
    function calRangePhase() {
      /** 보여질 범위의 현재 단계 계산 */
      setPhase(Math.ceil(activePage / pageRangeDisplayed));
    },
    [activePage]
  );

  const buttonNumbers: Array<number> = [];
  for (let i = 0; i < totalPageCount; i++) {
    buttonNumbers[i] = i + 1;
  }

  const startIndex = pageRangeDisplayed * (phase - 1);
  const endIndex = Math.min(pageRangeDisplayed * phase, totalPageCount);
  const currentPhaseButtonNumbers: Array<number> = [];
  for (let i = startIndex; i < endIndex; i++) {
    currentPhaseButtonNumbers.push(buttonNumbers[i]);
  }

  return (
    <ul>
      <li>
        <button onClick={() => onChange(1)}>끝까지</button>
      </li>
      <li>
        <button
          onClick={() => {
            if (activePage === 1) {
              return;
            }

            onChange(activePage - 1);
          }}
        >
          이전
        </button>
      </li>

      {currentPhaseButtonNumbers.map((item: number) => {
        return (
          <li key={item}>
            <button onClick={() => onChange(item)}>{item}</button>
          </li>
        );
      })}
      <li>
        <button
          onClick={() => {
            if (activePage === totalPageCount) {
              return;
            }

            onChange(activePage + 1);
          }}
        >
          다음
        </button>
      </li>
      <li>
        <button onClick={() => onChange(totalPageCount)}>끝까지</button>
      </li>
    </ul>
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
