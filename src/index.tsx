import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes/routes";
import { ApiProvider } from "./context/apiContext";
import { SearchModalProvider } from "./context/searchModalContext";

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("./mocks/browser");
  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <ApiProvider>
        <SearchModalProvider>
          <Routes />
        </SearchModalProvider>
      </ApiProvider>
    </React.StrictMode>
  );
});
