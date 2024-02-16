import HttpClient from "./httpClient";

export default class AlliniApi {
  constructor(private httpClient: HttpClient) {}

  async searchSnack(query: string) {
    return this.httpClient.get(`/snacks/${query}`);
  }

  async getSnackById(snackId: string) {
    return this.httpClient.get(`/snacks/${snackId}`);
  }
}
