import AlliniApi from "./api/alliniApi";
import MockClient from "./api/mockClient";
import styles from "./app.module.scss";

export default function App() {
  /* api 테스트 */
  const client = new MockClient();
  const alliniApi = new AlliniApi(client);
  // alliniApi.searchSnack("소고기").then((res) => console.log(res, "test"));
  // alliniApi.searchSnack().then((res) => console.log(res, "test"));

  return <div className={styles.renderTest}>TEST - 3</div>;
}
