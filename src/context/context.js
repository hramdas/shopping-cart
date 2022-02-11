import React, { createContext, useReducer, useContext } from "react";
import faker from "@faker-js/faker";
import { cartReducer } from "./Reducer";

const Cart = createContext();
export const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.fashion(),
    inStock: faker.datatype.boolean(),
    ratings: faker.random.arrayElements([1, 2, 3, 4, 5]),
    fastDelivery: faker.datatype.boolean(),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export const CartState = () => {
  return useContext(Cart);
};
