import { useState } from "react";
import ListItem from "../../components/customSelect/listItem";
import ListModal from "../../components/customSelect/listModal";

const options = [
  { id: 1, value: " 사료" },
  { id: 2, value: "간식" },
  { id: 3, value: "임시" },
];

/** v1 에선 사료/간식은 동일한 데이터를 받을 예정입니다. */
export default function MealRegistration() {
  const [feed, setFeed] = useState("food");

  return (
    <div>
      {/* 사료 or 간식 */}

      <ListModal value={feed} onChagne={(feed) => setFeed(feed)}>
        <ListItem value="" defaultOptionMessage>
          사료/간식 - 선택해 주세요!
        </ListItem>
        <ListItem value="food">사료</ListItem>
        <ListItem value="snack">간식</ListItem>
        <ListItem value="temp">임시</ListItem>
      </ListModal>
      {/* 대표 이미지 설정 - 없을시 화이트 슈나우져 그림이나 사진 보여주기 */}
      {/* 간식명 */}
      {/* 브랜드명 */}
      {/* 금액 - 셀렉트 창으로 범위로써 고르게 할까? */}
      {/* 구매한 장소 및 사이트 */}
      {/* 들어가는 재료, [이미지, 이미지에서 뽑은 데이터, 내가 직접 적은 데이터] */}
      {/* 본문 - 그냥 기록용 */}
      {/* 알레르기 정도: 없음, 보통, 심함 */}
      {/* 선호도: 싫어한다, 관심이 없다, 좋아한다. */}
      {/* 먹은 날짜 및 시간 직접 입력 */}
      {/* 먹고나서 어떤 특이사항이 있는지 셀렉트창: 구토, 가려움, 쇼크, 이상없음, 켁켁거림, 기타(직접 입력) 등등.. */}
      {/* 즐겨 찾기 - 최애 사료, 최애 간식 느낌! */}
    </div>
  );
}
