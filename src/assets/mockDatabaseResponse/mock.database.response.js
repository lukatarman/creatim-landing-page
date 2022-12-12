import image from "../img/shoes.jpg";

export const getStoreItems = () => {
  return storeItems.slice(0, 8);
};

export const getFilteredStoreItems = (filters) => {
  filteredStoreItems = storeItems.filter((item) => filters.includes(item.age));
  return filteredStoreItems;
};

export const getAdditionalStoreItems = (filters, existingItems, additionalAmount) => {
  if (filters.length > 0) {
    return filteredStoreItems.slice(
      existingItems.length,
      existingItems.length + additionalAmount
    );
  }

  return storeItems.slice(existingItems.length, existingItems.length + additionalAmount);
};

let filteredStoreItems;

const storeItems = [
  {
    name: "Tommy Hilfiger Shoes",
    price: "20,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "Tommy Hilfiger Shoes",
    price: "20,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "Tommy Hilfiger Shoes",
    price: "20,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "Tommy Hilfiger Kid's Shoes",
    price: "20,99 EUR",
    age: "kids",
    image,
  },
  {
    name: "Tommy Hilfiger Shoes",
    price: "20,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "Tommy Hilfiger Shoes",
    price: "20,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "Tommy Hilfiger Kid's Shoes",
    price: "20,99 EUR",
    age: "kids",
    image,
  },
  {
    name: "Tommy Hilfiger Shoes",
    price: "20,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "NEW Tommy Hilfiger Shoes",
    price: "20,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "NEW Tommy Hilfiger Shoes",
    price: "20,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "NEW Tommy Hilfiger Shoes",
    price: "20,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "Tommy Hilfiger Kid's Shoes",
    price: "12,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "NEW Tommy Hilfiger Shoes",
    price: "20,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "NEW Tommy Hilfiger Shoes",
    price: "20,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "NEW Tommy Hilfiger Shoes",
    price: "20,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "Tommy Hilfiger Kid's Shoes",
    price: "12,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "NEW Tommy Hilfiger Kid's Shoes",
    price: "20,99 EUR",
    age: "kids",
    image,
  },
  {
    name: "NEW Tommy Hilfiger Shoes",
    price: "20,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "NEW Tommy Hilfiger Shoes",
    price: "20,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "Kid's Tommy Hilfiger Shoes",
    price: "12,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "NEW Tommy Hilfiger Shoes",
    price: "20,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "NEW Tommy Hilfiger Shoes",
    price: "20,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "NEW Tommy Hilfiger Kid's Shoes",
    price: "20,99 EUR",
    age: "kids",
    image,
  },
  {
    name: "Kid's Tommy Hilfiger Shoes",
    price: "12,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "NEW Tommy Hilfiger Shoes",
    price: "20,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "NEW Tommy Hilfiger Shoes",
    price: "20,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "NEW Tommy Hilfiger Shoes",
    price: "20,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "Kid's Tommy Hilfiger Shoes",
    price: "12,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "NEW Tommy Hilfiger Shoes",
    price: "20,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "NEW Tommy Hilfiger Shoes",
    price: "20,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "NEW Tommy Hilfiger Shoes",
    price: "20,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "Kid's Tommy Hilfiger Shoes",
    price: "12,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "NEW Tommy Hilfiger Shoes",
    price: "20,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "NEW Tommy Hilfiger Shoes",
    price: "20,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "NEW Tommy Hilfiger Shoes",
    price: "20,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "Kid's Tommy Hilfiger Shoes",
    price: "12,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "NEW Tommy Hilfiger Shoes",
    price: "20,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "NEW Tommy Hilfiger Shoes",
    price: "20,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "NEW Tommy Hilfiger Shoes",
    price: "20,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "Kid's Tommy Hilfiger Shoes",
    price: "12,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "NEW Tommy Hilfiger Shoes",
    price: "20,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "NEW Tommy Hilfiger Shoes",
    price: "20,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "NEW Tommy Hilfiger Shoes",
    price: "20,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "Kid's Tommy Hilfiger Shoes",
    price: "12,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "NEW Tommy Hilfiger Shoes",
    price: "20,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "NEW Tommy Hilfiger Shoes",
    price: "20,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "NEW Tommy Hilfiger Shoes",
    price: "20,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "Kid's Tommy Hilfiger Shoes",
    price: "12,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "NEW Tommy Hilfiger Shoes",
    price: "20,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "NEW Tommy Hilfiger Shoes",
    price: "20,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "NEW Tommy Hilfiger Shoes",
    price: "20,99 EUR",
    age: "adult",
    image,
  },
  {
    name: "Kid's Tommy Hilfiger Shoes",
    price: "12,99 EUR",
    age: "adult",
    image,
  },
];
