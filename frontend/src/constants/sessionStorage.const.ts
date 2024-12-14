export const getCart = (key: string) => {
  return JSON.parse(sessionStorage.getItem(key) || "[]");
};
export const setCart = (key: string, value: any) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};
export const removeCart = (key: string) => {
  sessionStorage.removeItem(key);
};
export const clearCart = () => {
  sessionStorage.clear();
};
export const updateItemByKey = (key: string) => {
  sessionStorage.removeItem(key);
};
