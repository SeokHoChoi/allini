// src/mocks/handlers.ts
import { http, HttpResponse } from "msw";
import { createListMock } from "../utils/mockUtils/createListMock";

const snacks = ["연어간식", "소고기간식", "참치간식", "닭고기간식"];
const contents = ["그냥 먹었다", "맛있게 먹었다", "별로다", "맛있네"];

const data = createListMock(snacks, contents);

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/posts", () => {
    return HttpResponse.json(data);
  }),
];
