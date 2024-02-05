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
  const [rangePhase, setRangePhase] = useState(1);
  /** 렌더링 될 버튼 */
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

  useEffect(
    function calRangePhase() {
      /** 보여질 범위의 현재 단계 계산 */
      setRangePhase(Math.ceil(activePage / pageRangeDisplayed));
    },
    [activePage]
  );

  useEffect(
    function renderBtns() {
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

      setBtnsArr([...btnsArr]);
    },
    [rangePhase]
  );

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

      {btnsArr.map((item: number) => {
        return (
          <li>
            <button key={item} onClick={() => onChange(item)}>
              {item}
            </button>
          </li>
        );
      })}
      <li>
        <button
          onClick={() => {
            if (activePage === btnsCalculated) {
              return;
            }

            onChange(activePage + 1);
          }}
        >
          다음
        </button>
      </li>
      <li>
        <button onClick={() => onChange(btnsCalculated)}>끝까지</button>
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
