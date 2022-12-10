import {
  storeItems,
  fourNewStoreItems,
  filteredItems,
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
    }, 250);
  });
};

export const getFilteredItems = async (filters) => {
  // would normally modify api query according to filters here
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(filteredItems);
    }, 350);
  });
};
