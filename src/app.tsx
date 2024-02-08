import styles from "./app.module.scss";
import Home from "./pages/home/page";
import Routes from "./routes/routes";

export default function App() {
  return (
    <div className={styles.renderTest}>
      <Routes />
    </div>
  );
}
