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
        return [...prevCart, item];
      }
    });
  };

  const updateCartItemQuantity = (index, quantity) => {
    const newCart = [...cart];
    newCart[index].quantity = quantity;
    setCart(newCart);
  };

  const removeCartItem = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCartItemQuantity, removeCartItem }}>
      {children}
    </CartContext.Provider>
  );
};



// import React, { createContext, useState } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (item) => {
//     setCart((prevCart) => {
//       const existingItemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
//       if (existingItemIndex !== -1) {
//         const newCart = [...prevCart];
//         newCart[existingItemIndex].quantity += item.quantity;
//         return newCart;
//       } else {
//         return [...prevCart, item];
//       }
//     });
//   };

//   const updateCartItemQuantity = (index, quantity) => {
//     const newCart = [...cart];
//     newCart[index].quantity = quantity;
//     setCart(newCart);
//   };

//   const removeCartItem = (index) => {
//     const newCart = cart.filter((_, i) => i !== index);
//     setCart(newCart);
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, updateCartItemQuantity, removeCartItem }}>
//       {children}
//     </CartContext.Provider>
//   );
// };



// // src/contexts/CartContext.js
// import React, { createContext, useState } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([]);

//     const addToCart = (product) => {
//         setCart(prevCart => [...prevCart, product]);
//     };

//     const updateCartItemQuantity = (index, quantity) => {
//         const newCart = [...cart];
//         newCart[index].quantity = quantity;
//         setCart(newCart);
//     };
//     const removeCartItem = (index) => {
//         const newCart = cart.filter((_, i) => i !== index);
//         setCart(newCart);
//       };

//     return (
//         <CartContext.Provider value={{ cart, addToCart, updateCartItemQuantity, removeCartItem }}>
//             {children}
//         </CartContext.Provider>
//     );
// };
