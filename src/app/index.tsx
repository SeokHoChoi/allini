import React from "react";
import ReactDOM from "react-dom/client";

import "./reset.css";
import { ApiProvider } from "@contexts/apiContext";
import { SearchModalProvider } from "@contexts/searchModalContext";
import Routes from "../shared/routes/routes";

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("../mocks/browser");
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
