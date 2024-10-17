// src/mocks/handlers.ts
import { http, HttpResponse } from "msw";
import { createListMock } from "@utils/mockUtils/createListMock";

interface ItemBase {
  id: number;
  content: string;
  allergy: boolean;
}

interface SnackItem extends ItemBase {
  snack: string;
}

interface FoodItem extends ItemBase {
  food: string;
}

type SnackOrFood = SnackItem | FoodItem;

const snacks = ["연어간식", "소고기간식", "참치간식", "닭고기간식"];
const foods = ["연어간식", "소고기간식", "참치간식", "닭고기간식"];
const contents = ["그냥 먹었다", "맛있게 먹었다", "별로다", "맛있네"];

const snacksData = createListMock("snack", snacks, contents);
const foodsData = createListMock("food", foods, contents);
// 목데이터는 등록순으로 정렬되지 않습니다.
const allData = [...snacksData, ...foodsData];

function hasSnackProperty(item: SnackOrFood): item is SnackItem {
  return (item as SnackItem).snack !== undefined;
}

function hasFoodProperty(item: SnackOrFood): item is FoodItem {
  return (item as FoodItem).food !== undefined;
}

export const handlers = [
  http.get(`https://jsonplaceholder.typicode.com/snacks`, ({ request }) => {
    const url = new URL(request.url);
    const query = url.searchParams.get("query");
    const keyword = query ? decodeURIComponent(query) : "";

    if (keyword === "") {
      return HttpResponse.json(snacksData);
    }

    const filteredData = snacksData.filter((item) => {
      if (hasSnackProperty(item)) {
        return item.snack.toLowerCase().includes(keyword.toLowerCase());
      }

      return false;
    });

    return HttpResponse.json(filteredData);
  }),

  http.get(
    "https://jsonplaceholder.typicode.com/snacks/nonexistentEndpoint",
    () => {
      return new HttpResponse(null, {
        // status: 404,
        // status: 500,
        // status: 401,
        statusText: "Incorrect request address format.",
      });
    }
  ),

  // http.get("https://jsonplaceholder.typicode.com/snacks/:searchId", (req) => {
  //   const searchId = req.params.searchId as string;
  //   const filteredData = snacksData.filter(
  //     (item) => item.id === Number(searchId)
  //   );
  //   return HttpResponse.json(filteredData[0]);
  // }),

  http.get("https://jsonplaceholder.typicode.com/foods", ({ request }) => {
    const url = new URL(request.url);
    const query = url.searchParams.get("query");
    const keyword = query ? decodeURIComponent(query) : "";
    if (keyword === "") {
      return HttpResponse.json(foodsData);
    }

    const filteredData = foodsData.filter((item) => {
      if (hasFoodProperty(item)) {
        return item.food.toLowerCase().includes(keyword.toLowerCase());
      }

      return false;
    });

    return HttpResponse.json(filteredData);
  }),

  http.get("https://jsonplaceholder.typicode.com/foods/:searchId", (req) => {
    const searchId = req.params.searchId as string;
    const filteredData = foodsData.filter(
      (item) => item.id === Number(searchId)
    );
    return HttpResponse.json(filteredData[0]);
  }),

  // All (Snacks + Foods) 핸들러
  http.get("https://api.example.com/all", ({ request }) => {
    const url = new URL(request.url);
    const query = url.searchParams.get("query");
    const keyword = query ? decodeURIComponent(query) : "";

    if (keyword === "") {
      return HttpResponse.json(allData);
    }

    const filteredData = allData.filter((item) => {
      if (hasSnackProperty(item)) {
        return item.snack.toLowerCase().includes(keyword.toLowerCase());
      } else if (hasFoodProperty(item)) {
        return item.food.toLowerCase().includes(keyword.toLowerCase());
      }
      return false;
    });

    return HttpResponse.json(filteredData);
  }),

  http.get("https://api.example.com/error", () => {
    return new HttpResponse(null, {
      status: 500,
      statusText: "Internal Server Error",
    });
  }),
];
