export const setItem = (key: string, value: any) => {
  if (value === "") {
    localStorage.setItem(key, value);
    return;
  }

  const stringified = JSON.stringify(value);
  localStorage.setItem(key, stringified);
};
