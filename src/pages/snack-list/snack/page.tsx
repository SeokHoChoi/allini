import { useParams } from "react-router-dom";
import { useApi } from "../../../context/apiContext";
import { useEffect } from "react";

export default function Snack() {
  const api = useApi();
  const { snackId } = useParams();

  useEffect(function callSnackList() {
    if (snackId) {
      api.getSnackById(snackId).then((res) => console.log(res));
    }
  }, []);
  return <div>DetailList</div>;
}
