// sacar el any y agragarle un generico o un objeto,
// no entiendo por que al final le agrega el signo!
export const getItem = (key: string): any => {
  return JSON.parse(localStorage.getItem(key)!);
};
// sacar el any y agragarle un generico o un objeto
export const setItem = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};
