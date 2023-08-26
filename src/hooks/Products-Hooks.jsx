import React, { useState, useEffect } from 'react';
import ProductsList from '@/components/Products/ProductsList';


export default function ProductsListHooks({ products }) {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const HandleModal = (id) => {
    setSelectedItemId(id);
    setModal(!modal)
    };

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteItems');
    if (storedFavorites) {
      setFavoriteItems(JSON.parse(storedFavorites));
    }

    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleItemAction = (id, itemList, setItemList) => {
    const item = products.find((product) => product.id === id);
    if (item && !itemList.some((item) => item.id === id)) {
      setItemList([...itemList, item]);
    }
  };

  const handleLikeClick = (id) => {
    handleItemAction(id, favoriteItems, setFavoriteItems);
  };

  const handleCartClick = (id) => {
    handleItemAction(id, cartItems, setCartItems);
  };

  return (
    
    <ProductsList
      modal={modal}
      products={products}
      selectedItemId={selectedItemId}
      HandleModal={HandleModal}
      handleCartClick={handleCartClick}
      handleLikeClick={handleLikeClick}
    />
  
    
  );
}
