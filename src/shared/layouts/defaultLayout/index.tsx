import Footer from "@widgets/footer";
import Header from "@widgets/header";
import styles from "./index.module.scss";
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@contexts/sidebarContext";

export default function DefaultLayout() {
  return (
    <div className={styles.layoutArea}>
      <SidebarProvider>
        <Header />
      </SidebarProvider>
      <main className={styles.mainArea}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
