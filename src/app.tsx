import { Outlet } from "react-router-dom";
import styles from "./app.module.scss";
import { ApiProvider } from "./context/apiContext";

export default function App() {
  return (
    <div className={styles.renderTest}>
      <ApiProvider>
        <Outlet />
      </ApiProvider>
    </div>
  );
}
