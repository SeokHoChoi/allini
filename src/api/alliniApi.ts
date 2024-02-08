import HttpClient from "./httpClient";

export default class AlliniApi {
  constructor(private httpClient: HttpClient) {}

  async searchSnack(keyword = "") {
    return this.httpClient.get(`/posts/${keyword}`);
  }
}
