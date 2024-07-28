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

export const createListMock = (
  feed: string,
  feedsArr: Array<string>,
  contentsArr: Array<string>
) => {
  const dataArr: Array<SnackOrFood> = [];

  for (let i = 0; i < 15; i++) {
    const feedIndex = Math.floor(Math.random() * feedsArr.length);
    const contentIndex = Math.floor(Math.random() * contentsArr.length);
    const allergy = Math.random() >= 0.5; // 50% chance of being true

    const isSnack = feed === "snack";
    const itemContent = `${i + 1} - ${contentsArr[contentIndex]}`;
    const feedValue = `${i + 1} - ${feedsArr[feedIndex]}`;

    const obj: SnackOrFood = {
      id: i + 1,
      content: itemContent,
      allergy: allergy,
      ...(isSnack ? { snack: feedValue } : { food: feedValue }),
    };
    dataArr.push(obj);
  }

  return dataArr;
};
