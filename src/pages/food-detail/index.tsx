import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useApi } from "@contexts/apiContext";

export default function FoodDetail() {
  const api = useApi();
  const { snackId } = useParams();

  useEffect(function callSnackList() {
    if (snackId) {
      api.getSnackById(snackId).then((res) => console.log(res));
    }
  }, []);
  return <div>DetailList</div>;
}
