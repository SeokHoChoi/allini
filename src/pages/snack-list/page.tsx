import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useApi } from "../../context/apiContext";
import { ErrorBoundary } from "../../components/errorBoundary";

export default function SnackList() {
  const [snacks, setSnacks] = useState([]);
  const [errorTest, setErrorTest] = useState(null);
  const api = useApi();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(
    function callSnackList() {
      api
        .searchSnack(`?domain=snack&query`)
        // .searchSnack(`?domain=snack&query=${query}`)
        .then((res) => setSnacks(res))
        .catch((error) => {
          if (error) {
            setErrorTest(error);
          }
        });

      if (errorTest) {
        throw errorTest;
      }
    },
    [api, query]
  );

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
