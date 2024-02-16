import { Outlet } from "react-router-dom";
import styles from "./app.module.scss";
import { useSearchModal } from "./context/searchModalContext";
import DefaultLayout from "./layout/defaultLayout";

export default function App() {
  const { setIsOpen } = useSearchModal().actions;
  const handleTogglePanel = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.renderTest} onClick={handleTogglePanel}>
      <DefaultLayout>
        <Outlet />
      </DefaultLayout>
    </div>
  );
}
