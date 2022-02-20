import React, { createContext, useReducer, useContext } from "react";
import faker from "@faker-js/faker";
import { cartReducer, productReducer } from "./Reducer";

const Cart = createContext();
faker.seed(99);

export const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(400, 400),
    inStock: faker.random.arrayElement([0, 1, 2, 3, 5, 6, 7, 10]),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
    fastDelivery: faker.datatype.boolean(),
  }));

  //Hook useReducer - alternative to useState,
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};
