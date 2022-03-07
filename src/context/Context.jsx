import React, { useContext, useReducer } from 'react';
import { createContext } from "react";
import faker from "faker";
import { cartReducer } from './Reducers';

const Cart = createContext();
faker.seed(99);

const Context = ({ children }) => {
  const products = [...Array(21)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7, 8, 10, 11, 15]),
    fastDelivery: faker.datatype.boolean(),
    reating: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));
    console.log(products)
    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart:[]
        
  })
  return <Cart.Provider value={{ state, dispatch }}>{ children }</Cart.Provider>;
};

export default Context;

export const CartState = () => {
    return useContext(Cart);
}