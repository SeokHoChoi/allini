import Footer from "@widgets/footer";
import Header from "@widgets/header";
import styles from "./index.module.scss";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <div className={styles.layoutArea}>
      <Header />
      <main className={styles.mainArea}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
