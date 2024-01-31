import axios, { AxiosInstance } from "axios";

export default class MockClient {
  private httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://jsonplaceholder.typicode.com",
    });
  }

  async searchSnack(snack: string) {
    return this.httpClient
      .get("/posts")
      .then((res) =>
        res.data.filter((post: any) => post.snack.includes(snack))
      );
  }

  async showAllSnacks() {
    return this.httpClient.get("/posts");
  }
}
