import { storeItems } from "../assets/mockDatabaseResponse/mock.database.response.js";

export const getItems = async () => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(storeItems);
    }, 150);
  });
};
