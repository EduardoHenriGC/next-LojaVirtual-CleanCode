import CartItem from '@/components/cart/cartItem';
import { useState, useEffect } from 'react';

function getStoredCart() {
  const storedCart = localStorage.getItem('cartItems');
  return storedCart ? JSON.parse(storedCart) : [];
}

function removeCartFromLocalStorage(updatedCart) {
  localStorage.setItem('cartItems', JSON.stringify(updatedCart));
}

export function CartHooks() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(getStoredCart());
  }, []);

  const handleRemoveCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    removeCartFromLocalStorage(updatedCart);
  };

  return (<CartItem cartItems={cartItems}  handleRemoveCart={handleRemoveCart}/>)
}
