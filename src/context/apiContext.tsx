import { createContext, useContext } from "react";
import HttpClient from "../api/httpClient";
import AlliniApi from "../api/alliniApi";

const httpClient = new HttpClient("https://jsonplaceholder.typicode.com");
const alliniApi = new AlliniApi(httpClient);

const ApiContext = createContext(alliniApi);

export function ApiProvider({ children }: { children: React.ReactNode }) {
  return (
    <ApiContext.Provider value={alliniApi}>{children}</ApiContext.Provider>
  );
}

export function useApi() {
  return useContext(ApiContext);
}
