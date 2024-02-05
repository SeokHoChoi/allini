import AlliniApi from "./api/alliniApi";
import HttpClient from "./api/httpClient";
import styles from "./app.module.scss";
import Pagination from "./components/pagination";

export default function App() {
  /* api 테스트 */
  const client = new HttpClient("https://jsonplaceholder.typicode.com");
  const alliniApi = new AlliniApi(client);
  // alliniApi.searchSnack().then((res) => console.log(res));

  return (
    <div className={styles.renderTest}>
      <Pagination
        totalItemsCount={145}
        // totalPage=7
        itemsCountPerPage={10}
        activePage={1}
        pageRangeDisplayed={7}
        onChange={() => {}}
      />
    </div>
  );
}
