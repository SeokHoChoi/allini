import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useApi } from "@contexts/apiContext";

interface Snack {
  id: number;
  allergy: boolean;
  content: string;
  snack: string;
}

export default function TreatsList() {
  const [treats, setTreats] = useState<Snack[]>([]);
  const [error, setError] = useState(null);
  const api = useApi();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    api
      // .searchSnack(`nonexistentEndpoint`)
      .searchSnack(`?domain=snack&query`)
      // .searchSnack(`?domain=snack&query=${query}`)
      .then((res) => setTreats(res))
      .catch((error) => setError(error));
  }, [api, query]);

  if (error) {
    throw error;
  }

  return (
    <ul>
      {treats.map((snack) => (
        <li key={snack.id}>{snack.content}</li>
      ))}
    </ul>
  );
}
