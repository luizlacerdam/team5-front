// This snippet is used to handle local storage operations in a React application.
export const setItem = (key, body) => {
  localStorage.setItem(key, JSON.stringify(body));
};
// This function is used to set an item in local storage
export const getItem = (key) => JSON.parse(localStorage.getItem(key) || 'null');
// This function is used to get an item from local storage
export const getLocalStorage = (key) => {
  if (!getItem(key)) setItem(key, []);
  const item = getItem(key);
  return item;
};
// This function is used to get an item from local storage and set it to an empty array if it doesn't exist
export const setStorageArray = (array, newItem, key) => {
  const oldInfoToPersist = array.filter((item) => item.id !== newItem.id);
  let newArray = [...oldInfoToPersist, newItem];
  if (newItem.quantity === 0) newArray = [...oldInfoToPersist];
  setItem(key, newArray);
  return newArray;
};
