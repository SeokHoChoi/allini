import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useApi } from "../../context/apiContext";

export default function SnackList() {
  const api = useApi();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(
    function callSnackList() {
      api
        .searchSnack(`?domain=snack&query=${query}`)
        .then((res) => console.log(res));
    },
    [api, query]
  );

  return <div>List</div>;
}
