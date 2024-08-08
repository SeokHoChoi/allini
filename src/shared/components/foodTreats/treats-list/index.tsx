import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useApi } from "@contexts/apiContext";

export default function TreatsList() {
  const [treats, setTreats] = useState([]);
  const [error, setError] = useState(null);
  const api = useApi();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    api
      .searchSnack(`nonexistentEndpoint`)
      // .setTreats(`?domain=snack&query`)
      // .setTreats(`?domain=snack&query=${query}`)
      .then((res) => setTreats(res))
      .catch((error) => setError(error));
  }, [api, query]);

  if (error) {
    throw error;
  }

  return (
    <ul>
      {treats.map(
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
