import { Outlet } from "react-router-dom";
import styles from "./app.module.scss";
import { Suspense } from "react";
import { ErrorBoundary } from "./providers/errorBoundary";
import { useSearchModal } from "@contexts/searchModalContext";

export default function App() {
  const { setIsOpen } = useSearchModal().actions;
  const handleTogglePanel = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.area} onClick={handleTogglePanel}>
      <div className={styles.wrapper}>
        <ErrorBoundary fallback={FallbackComponent} onReset={() => {}}>
          <Suspense fallback={<div>로딩중..</div>}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </div>
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
