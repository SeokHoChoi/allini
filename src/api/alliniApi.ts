import HttpClient from "./httpClient";

export default class AlliniApi {
  constructor(private httpClient: HttpClient) {}

  async searchSnack(query: string) {
    return this.httpClient.get(`/pet-food-items/search/${query}`);
  }

  async getSnackById(snackId: string) {
    return this.httpClient.get(`/pet-food-items/goods/${snackId}`);
  }
}
