import axios from "axios";

export default class MockClient {
  async getSnacks() {
    return axios.get("/mock/board.json");
  }
}
