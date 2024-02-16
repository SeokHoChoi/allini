// src/mocks/handlers.ts
import { http, HttpResponse } from "msw";
import { createListMock } from "../utils/mockUtils/createListMock";

const snacks = ["연어간식", "소고기간식", "참치간식", "닭고기간식"];
const contents = ["그냥 먹었다", "맛있게 먹었다", "별로다", "맛있네"];

const data = createListMock(snacks, contents);

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/snacks", () => {
    return HttpResponse.json(data);
  }),

  http.get(
    `https://jsonplaceholder.typicode.com/snacks/search`,
    ({ request }) => {
      const url = new URL(request.url);
      const query = url.searchParams.get("query");
      const keyword = query ? decodeURIComponent(query) : "";
      const filteredData = data.filter((item) => item.snack.includes(keyword));
      const isFindData = Array.isArray(filteredData) && filteredData.length;
      const response = isFindData ? filteredData : [];
      return HttpResponse.json(response);
    }
  ),

  http.get(
    "https://jsonplaceholder.typicode.com/snacks/snack/:searchId",
    (req) => {
      const searchId = req.params.searchId as string;
      const filteredData = data.filter((item) => item.id === Number(searchId));
      return HttpResponse.json(filteredData[0]);
    }
  ),
];
