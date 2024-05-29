import { Outlet } from "react-router-dom";
import styles from "./app.module.scss";
import { useSearchModal } from "./contexts/searchModalContext";
import DefaultLayout from "./layout/defaultLayout";
import { ErrorBoundary } from "./components/errorBoundary";
import { Suspense } from "react";
import "./assets/fonts/font.css";

export default function App() {
  const { setIsOpen } = useSearchModal().actions;
  const handleTogglePanel = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.renderTest} onClick={handleTogglePanel}>
      <DefaultLayout>
        <ErrorBoundary fallback={FallbackComponent} onReset={() => {}}>
          <Suspense fallback={<div>로딩중..</div>}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </DefaultLayout>
    </div>
  );
}

const FallbackComponent = ({ errorInfo, customError, onReset }) => {
  return (
    <div>
      <p>에러 발생: {customError?.BODY || "모르는 에러입니다."}</p>
      <button onClick={onReset}>다시 불러오세요</button>
    </div>
  );
};
