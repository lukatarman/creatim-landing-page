import {
  getStoreItems,
  getAdditionalStoreItems,
  getFilteredStoreItems,
} from "../assets/mockDatabaseResponse/mock.database.response.js";

export const getItems = async () => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(getStoreItems);
    }, 150);
  });
};

export const getNewItems = async (filters, existingProducts) => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(getAdditionalStoreItems(filters, existingProducts, 4));
    }, 250);
  });
};

export const getFilteredItems = async (filters) => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(getFilteredStoreItems(filters));
    }, 350);
  });
};
