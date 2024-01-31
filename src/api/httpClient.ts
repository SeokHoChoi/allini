import axios, { AxiosInstance } from "axios";

export default class HttpClient {
  private httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: "/",
    });
  }

  async searchSnack(snack: string) {
    return axios.get("/");
  }

  async showAllSnacks() {
    return axios.get("/");
  }
}
