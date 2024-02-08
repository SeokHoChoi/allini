export const setItem = (key: string, value: unknown) => {
  const stringified = JSON.stringify(value);
  localStorage.setItem(key, stringified);
};
