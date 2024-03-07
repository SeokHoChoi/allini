import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useApi } from "../../context/apiContext";
import { ErrorBoundary } from "../../components/errorBoundary";

export default function SnackList() {
  const [snacks, setSnacks] = useState<Array<any>>([]);
  const [error, setError] = useState(false);
  const api = useApi();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    api
      .searchSnack(`?domain=snack&query`)
      // .searchSnack(`?domain=snack&query=${query}`)
      .then((res) => setSnacks(res))
      .catch((error) => setError(true));
  }, [api, query]);

  if (error) {
    throw new Error("에러");
  }

  return (
    <ul>
      {snacks.map(
        (snack: {
          id: number;
          allergy: boolean;
          content: string;
          snack: string;
        }) => (
          <li key={snack.id}>{snack.content}</li>
        )
      )}
    </ul>
  );
}
