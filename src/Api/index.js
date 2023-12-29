export const getRecentProducts = () => {
  return fetch("https://server-manage-bill-52d0ee56a9b3.herokuapp.com/api/v1/product").then((res) => res.json());
};

export const getRecentOrders = () => {
  return fetch("https://server-manage-bill-52d0ee56a9b3.herokuapp.com/api/v1/product").then((res) => res.json());
};

export const getRevenue = () => {
  return fetch("https://dummyjson.com/carts").then((res) => res.json());
};

export const getInventory = () => {
  return fetch("https://dummyjson.com/products").then((res) => res.json());
};

export const getCustomer = () => {
  return fetch("https://dummyjson.com/users").then((res) => res.json());
};

export const getOrders = () => {
  return fetch("https://dummyjson.com/carts/1").then((res) => res.json());
};

export const updateProduct = (url, data) => {
  return fetch(url, {
    method: "PATCH",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  }).then((res) => res.json());
};
