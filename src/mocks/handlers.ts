// src/mocks/handlers.ts
import { http, HttpResponse } from "msw";

const data: Array<any> = [];
const snacks = ["연어간식", "소고기간식", "참치간식", "닭고기간식"];
const contents = ["그냥 먹었다", "맛있게 먹었다", "별로다", "맛있네"];

for (let i = 0; i < 15; i++) {
  const snackIndex = Math.floor(Math.random() * snacks.length);
  const contentIndex = Math.floor(Math.random() * contents.length);
  const allergy = Math.random() >= 0.5; // 50% chance of being true

  const obj = {
    id: i + 1,
    snack: `${i + 1} - ${snacks[snackIndex]}`,
    content: `${i + 1} - ${contents[contentIndex]}`,
    allergy: allergy,
  };

  data.push(obj);
}

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/posts", () => {
    return HttpResponse.json(data);
  }),
];
