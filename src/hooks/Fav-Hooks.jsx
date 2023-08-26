import FavoritesItem from '@/components/favorites/favoritesItem';
import { useState, useEffect } from 'react';

function getStoredFavorites() {
  const storedFavorites = localStorage.getItem('favoriteItems');
  return storedFavorites ? JSON.parse(storedFavorites) : [];
}

function removeFavoriteFromLocalStorage(updatedFavorites) {
  localStorage.setItem('favoriteItems', JSON.stringify(updatedFavorites));
}

export function FavoritesHooks() {
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    setFavoriteItems(getStoredFavorites());
  }, []);

  const handleRemoveFavorite = (id) => {
    const updatedFavorites = favoriteItems.filter((item) => item.id !== id);
    setFavoriteItems(updatedFavorites);
    removeFavoriteFromLocalStorage(updatedFavorites);
  };

  return (

    <FavoritesItem favoriteItems={favoriteItems}  handleRemoveFavorite={handleRemoveFavorite}/>
  )
}
