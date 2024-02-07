import { useEffect, useState } from "react";
import styles from "./app.module.scss";
import useDebounce from "./hooks/useDebounce";

export default function App() {
  const [state, setState] = useState("");
  const debouncedState = useDebounce(state, 300);

  useEffect(() => {
    // 정상 출력 pr 확인용 console.log
    console.log(`/test/search/api/${debouncedState}`);
  }, [debouncedState]);

  return (
    <div className={styles.renderTest}>
      <input value={state} onChange={(e) => setState(e.target.value)} />
    </div>
  );
}
