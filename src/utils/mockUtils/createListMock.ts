interface DataType {
  id: number;
  snack: string;
  content: string;
  allergy: boolean;
}

export const createListMock = (
  snacksArr: Array<string>,
  contentsArr: Array<string>
) => {
  const dataArr: Array<DataType> = [];

  for (let i = 0; i < 15; i++) {
    const snackIndex = Math.floor(Math.random() * snacksArr.length);
    const contentIndex = Math.floor(Math.random() * contentsArr.length);
    const allergy = Math.random() >= 0.5; // 50% chance of being true

    const obj: {
      id: number;
      snack: string;
      content: string;
      allergy: boolean;
    } = {
      id: i + 1,
      snack: `${i + 1} - ${snacksArr[snackIndex]}`,
      content: `${i + 1} - ${contentsArr[contentIndex]}`,
      allergy: allergy,
    };

    dataArr.push(obj);
  }

  return dataArr;
};
