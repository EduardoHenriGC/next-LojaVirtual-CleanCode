import React from 'react';
import styles from '../../styles/favorites/favorites.module.css'
import { useProductsContext } from '@/context/ProductsContext';
import {AiFillDelete} from "react-icons/ai"
import {BsFillCartCheckFill} from "react-icons/bs"


export default function FavoritesItem() {
  
const  {handleRemoveFavorite, favoriteItems,handleCartClick} = useProductsContext();
  return (
    <div className={styles.container}>
      <h2>Itens Favoritos</h2>
      {favoriteItems.length === 0 ? (
        <p>Nenhum item favorito ainda.</p>
      ) : (
        <ul className={styles.content}>
          {favoriteItems.map(({ 
            id, 
            nome, 
            imgurl, 
            preco }) => (
            <li className={styles.containerList} key={id}>
              <h4>{nome}</h4>
              <div className={styles.img}><img src={imgurl} alt={nome} height="150px" width="150px" /></div>
             <div className={styles.container_preco}> <p>${preco}</p>
              <div className={styles.containerhandle}>
                <BsFillCartCheckFill className={styles.cart} onClick={()=> handleCartClick(id)} />
              <AiFillDelete
                className={styles.removeButton}
                onClick={() => handleRemoveFavorite(id)}
              />
              </div>
                
              </div>
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
