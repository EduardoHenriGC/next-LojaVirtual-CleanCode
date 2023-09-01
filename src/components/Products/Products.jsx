import React from 'react';
import { FcLike } from 'react-icons/fc';
import { BsFillCartCheckFill } from 'react-icons/bs';
import styles from '../../styles/Product/Products.module.css';
import { useProductsContext } from '@/context/ProductsContext';
import Link from 'next/link';


function Products({ 
   id,
   nome, 
   imgurl,
   preco, 
   descricao, 
 }) {
  
  const {
    
    
    handleCartClick,
    handleLikeClick,
  } = useProductsContext();
  
  
  return (
   
    <li key={id}>
      <h4>{nome}</h4>
      <img src={imgurl} alt={nome} height="300px" width="300px" />
      <div className={styles.container_preco}>
        <p>${preco}</p>
        <div>
          <BsFillCartCheckFill
            className={styles.icons_cart}
            onClick={() => handleCartClick(id)}
          />
          <FcLike
            className={styles.icons_like}
            onClick={() => handleLikeClick(id)}
          />
        </div>
      </div>
      <Link href={`/produtos/${id}`} className={styles.link}>
  Ver mais..
</Link>


    </li>
   
  );
}

export default Products;
