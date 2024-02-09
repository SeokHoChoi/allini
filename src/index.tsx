import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes/routes";

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
      <Routes />
    </React.StrictMode>
  );
});
