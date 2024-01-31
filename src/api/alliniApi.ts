import HttpClient from "./httpClient";
import MockClient from "./mockClient";

type Client = MockClient | HttpClient;

export default class AlliniApi {
  constructor(private httpClient: Client) {}

  async searchSnack(snack = "") {
    return snack ? this.searchBySnack(snack) : this.showAllSnacks();
  }

  private searchBySnack(snack: string) {
    return this.httpClient.searchSnack(snack);
  }

  private showAllSnacks() {
    return this.httpClient.showAllSnacks();
  }
}
