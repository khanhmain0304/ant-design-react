export const getRecentProducts = () => {
  return fetch(
    "https://server-manage-bill-52d0ee56a9b3.herokuapp.com/api/v1/product"
  ).then((res) => res.json());
};

export const getRecentOrders = () => {
  return fetch(
    "https://server-manage-bill-52d0ee56a9b3.herokuapp.com/api/v1/product"
  ).then((res) => res.json());
};

export const getRevenue = () => {
  return fetch("https://dummyjson.com/carts").then((res) => res.json());
};
