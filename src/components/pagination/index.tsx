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
  let buttonCount: number = 0;
  if (totalPage) {
    buttonCount = totalPage;
  } else {
    buttonCount = Math.ceil((totalItemsCount as number) / itemsCountPerPage);
  }

  return (
    <div>
      {"<< <"}
      {buttonCount}
      {"> >>"}
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
