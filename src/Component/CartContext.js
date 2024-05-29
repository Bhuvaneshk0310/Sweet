import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
      if (existingItemIndex !== -1) {
        const newCart = [...prevCart];
        newCart[existingItemIndex].quantity += item.quantity;
        return newCart;
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const updateCartItemQuantity = (index, quantity) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      if (quantity <= 0) {
        newCart.splice(index, 1);
      } else {
        newCart[index].quantity = quantity;
      }
      return newCart;
    });
  };

  const removeCartItem = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCartItemQuantity, removeCartItem }}>
      {children}
    </CartContext.Provider>
  );
};


