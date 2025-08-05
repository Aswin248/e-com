import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const userId = '101'; // Replace with real user ID or auth logic

  // 🔄 Sync to Mongo
  const syncCartToMongo = async (updatedCart) => {
    try {
      await axios.post('http://localhost:3000/cart', {
        userId,
        cartItems: updatedCart,
      });
    } catch (err) {
      console.error('❌ Sync to Mongo failed:', err.message);
    }
  };

  // ✅ Add to Cart (Fixes double-count bug)
  const addToCart = (item) => {
    setCartItems(prev => {
      const exists = prev.find(i => i.id === item.id);
      let updated;

      if (exists) {
        // 🔁 Increase quantity if item already exists
        updated = prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // 🆕 Add new item with quantity 1
        updated = [...prev, { ...item, quantity: 1 }];
      }

      syncCartToMongo(updated);
      return updated;
    });
  };

  // 🔃 Fetch cart from Mongo on load
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/cart/${userId}`);
        setCartItems(res.data.cartItems || []);
      } catch (err) {
        console.error('❌ Fetch cart failed:', err.message);
      }
    };
    fetchCart();
  }, []);

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
