import Footer from "@widgets/footer";
import Header from "@widgets/header";
import styles from "./index.module.scss";

export default function DefaultLayout({ children }) {
  return (
    <div className={styles.layoutArea}>
      <Header />
      <main className={styles.mainArea}>{children}</main>
      <Footer />
    </div>
  );
}
