import HttpClient from "./httpClient";

export default class AlliniApi {
  constructor(private httpClient: HttpClient) {
    this.searchSnack = this.searchSnack.bind(this);
    this.getSnackById = this.getSnackById.bind(this);
    this.searchFood = this.searchFood.bind(this);
    this.getFoodById = this.getFoodById.bind(this);
  }

  async searchSnack(query: string) {
    return this.httpClient.get(`/snacks/${query}`);
  }

  async getSnackById(snackId: string) {
    return this.httpClient.get(`/snacks/${snackId}`);
  }

  async searchFood(query: string) {
    return this.httpClient.get(`/foods/${query}`);
  }

  async getFoodById(foodId: string) {
    return this.httpClient.get(`/foods/${foodId}`);
  }
}
