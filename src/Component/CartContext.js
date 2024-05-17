// src/contexts/CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart(prevCart => [...prevCart, product]);
    };

    const updateCartItemQuantity = (index, quantity) => {
        const newCart = [...cart];
        newCart[index].quantity = quantity;
        setCart(newCart);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, updateCartItemQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
