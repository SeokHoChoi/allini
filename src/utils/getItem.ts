export const getItem = (key: string) => {
  const item = localStorage.getItem(key);

  if (item) {
    try {
      return JSON.parse(item);
    } catch (e) {
      return item;
    }
  }
};
