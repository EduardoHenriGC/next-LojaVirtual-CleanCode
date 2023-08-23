import React, { useState, useEffect } from 'react';
import ProductListView from '@/components/Product/ProductList';





export default function ProductListLogic({ products, handleCart }) {
  const [favoriteItems, setFavoriteItems] = useState([]);
  

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteItems');
    if (storedFavorites) {
      setFavoriteItems(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  const handleLikeClick = (id) => {
    const item = products.find((product) => product.id === id);
    if (item && !favoriteItems.some((favItem) => favItem.id === id)) {
      setFavoriteItems([...favoriteItems, item]);
    }
  };

  return (
    <ProductListView
      products={products}
      favoriteItems={favoriteItems}
      handleCart={handleCart}
      handleLikeClick={handleLikeClick}
    />
  );
}
