import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useApi } from "@contexts/apiContext";

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
    <ul>
      {foods.map((food) => (
        <li key={food.id}>{food.content}</li>
      ))}
    </ul>
  );
}
