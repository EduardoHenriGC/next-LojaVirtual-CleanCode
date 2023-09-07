import React from 'react';
import styles from '../../styles/favorites/favorites.module.css'
import { useProductsContext } from '@/context/ProductsContext';
import {AiFillDelete} from "react-icons/ai"
import {BsFillCartCheckFill} from "react-icons/bs"


export default function FavoritesItem() {
  
const  {favoriteItems,handleCartClick,handleRemoveFav} = useProductsContext();
  return (
    <div className={styles.container}>
      <h2>Itens Favoritos</h2>
      {favoriteItems.length  === 0 ? (
        <p>Nenhum item favorito ainda.</p>
      ) : (
        <ul className={styles.content}>
          {favoriteItems.map(({ 
            id,
            idproduto, 
            nmproduto, 
            urlimg, 
            preco }) => (
            <li className={styles.containerList} key={id}>
              <h4>{nmproduto}</h4>
              <div className={styles.img}><img src={urlimg} alt={nmproduto} height="150px" width="150px" /></div>
             <div className={styles.container_preco}> <p>${preco}</p>
              <div className={styles.containerhandle}>
                <BsFillCartCheckFill className={styles.cart} onClick={()=> handleCartClick(idproduto)} />
              <AiFillDelete
                className={styles.removeButton}
                onClick={() => handleRemoveFav(id)}
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


