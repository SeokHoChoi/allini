export const filterKeyword = (keyword: string, list: Array<string>) => {
  return list.filter((item) => item !== keyword);
};
