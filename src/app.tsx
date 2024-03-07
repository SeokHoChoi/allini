import { Outlet } from "react-router-dom";
import styles from "./app.module.scss";
import { useSearchModal } from "./context/searchModalContext";
import DefaultLayout from "./layout/defaultLayout";
import { ErrorBoundary } from "./components/errorBoundary";
import { Suspense } from "react";
import { CheckErrorProvider } from "./context/hasErrorContext";

export default function App() {
  const { setIsOpen } = useSearchModal().actions;
  const handleTogglePanel = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.renderTest} onClick={handleTogglePanel}>
      <DefaultLayout>
        <CheckErrorProvider>
          <ErrorBoundary fallback={FallbackComponent} onReset={() => {}}>
            <Suspense fallback={<div>로딩중..</div>}>
              <Outlet />
            </Suspense>
          </ErrorBoundary>
        </CheckErrorProvider>
      </DefaultLayout>
    </div>
  );
}

const FallbackComponent = ({ errorInfo, onReset }) => (
  <div>
    <p>에러 발생: {errorInfo?.message || "모르는 에러입니다."}</p>
    <button onClick={onReset}>다시 불러오세요</button>
  </div>
);
