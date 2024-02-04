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
        totalItemsCount={27}
        // totalPage=15
        itemsCountPerPage={4}
        activePage={1}
        pageRangeDisplayed={10}
        onChange={() => {}}
      />
    </div>
  );
}
