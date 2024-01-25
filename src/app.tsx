import styles from "./app.module.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>라우팅 테스트 '/'</div>,
  },
  {
    path: "/test",
    element: <div>라우팅 테스트 '/test'</div>,
  },
]);

export default function App() {
  return (
    <div className={styles.renderTest}>
      app
      <RouterProvider router={router} />
    </div>
  );
}
