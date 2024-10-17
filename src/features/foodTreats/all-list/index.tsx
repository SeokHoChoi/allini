import clsx from "clsx";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useApi } from "@contexts/apiContext";
import FoodCard from "@ui/foodCard";
import Search from "@assets/icons/search.svg";

interface Snack {
  id: number;
  allergy: boolean;
  content: string;
  snack: string;
}

interface Food {
  id: number;
  allergy: boolean;
  content: string;
  food: string;
}

type AllFood = Snack | Food;

export default function AllList() {
  const [foods, setFoods] = useState<AllFood[]>([]);
  const [error, setError] = useState(null);
  const api = useApi();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    api
      .searchSnack(`?domain=all&query=${query}`)
      .then((res) => setFoods(res))
      .catch((error) => setError(error));
  }, [api, query]);

  if (error) {
    throw error;
  }

  return (
    <div className={clsx(styles.allListArea)}>
      <div className={clsx(styles.searchWrapper)}>
        <div className={clsx(styles.textWrapper)}>
          <Search />
          <span>찾는 사료/간식이 없나요?</span>
        </div>
        <button>등록하기</button>
      </div>

      <ul className={clsx(styles.listWrapper)}>
        {foods.map((food) => (
          <FoodCard
            key={food.id}
            data={{
              id: food.id,
              imageSrc: "",
              labels: ["알레르기", "선호도"],
              brand: "페스룸",
              foodName: "칠면조말랭이",
              ingredients: ["고기", "곡류"],
            }}
            className={""}
          />
        ))}
      </ul>
    </div>
  );
}
