import {
  storeItems,
  fourNewStoreItems,
} from "../assets/mockDatabaseResponse/mock.database.response.js";

export const getItems = async () => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(storeItems);
    }, 150);
  });
};

export const getNewItems = async () => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(fourNewStoreItems);
    }, 150);
  });
};
