import Footer from "../../components/footer";
import Header from "../../components/header";
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
