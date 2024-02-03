import axios, { AxiosInstance } from "axios";

export default class MockClient {
  private httpClient: AxiosInstance;

  constructor(baseURL: string) {
    this.httpClient = axios.create({
      baseURL,
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
