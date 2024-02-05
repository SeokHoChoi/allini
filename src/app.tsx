import { useState } from "react";
import AlliniApi from "./api/alliniApi";
import HttpClient from "./api/httpClient";
import styles from "./app.module.scss";
import Pagination from "./components/pagination";

export default function App() {
  const [btnTest, setBtnTest] = useState(1);
  /* api 테스트 */
  const client = new HttpClient("https://jsonplaceholder.typicode.com");
  const alliniApi = new AlliniApi(client);
  // alliniApi.searchSnack().then((res) => console.log(res));
  const changeActivePage = (btnNum: number) => {
    setBtnTest(btnNum);
  };

  return (
    <div className={styles.renderTest}>
      <Pagination
        totalItemsCount={132}
        // totalPage={7}
        itemsCountPerPage={5}
        activePage={btnTest}
        pageRangeDisplayed={4}
        onChange={changeActivePage}
      />
    </div>
  );
}
