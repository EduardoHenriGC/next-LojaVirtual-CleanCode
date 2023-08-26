import React from 'react';
import Link from 'next/link';
import styles from '../../styles/favorites/favorites.module.css'


export default function FavoritesItem({favoriteItems, handleRemoveFavorite}) {
  

  return (
    <div className={styles.container}>
      <h2>Itens Favoritos</h2>
      {favoriteItems.length === 0 ? (
        <p>Nenhum item favorito ainda.</p>
      ) : (
        <ul className={styles.favoritesList}>
          {favoriteItems.map(({ 
            id, 
            nome, 
            imgurl, 
            preco }) => (
            <li key={id}>
              <h4>{nome}</h4>
              <img src={imgurl} alt={nome} height="150px" width="150px" />
              <p>${preco}</p>
              <button
                className={styles.removeButton}
                onClick={() => handleRemoveFavorite(id)}
              >
                Remover
              </button>
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}