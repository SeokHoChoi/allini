import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useApi } from "../../contexts/apiContext";
import { ErrorBoundary } from "../../components/errorBoundary";

export default function SnackList() {
  const [snacks, setSnacks] = useState([]);
  const [error, setError] = useState(null);
  const api = useApi();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    api
      .searchSnack(`nonexistentEndpoint`)
      // .searchSnack(`?domain=snack&query`)
      // .searchSnack(`?domain=snack&query=${query}`)
      .then((res) => setSnacks(res))
      .catch((error) => setError(error));
  }, [api, query]);

  if (error) {
    throw error;
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
