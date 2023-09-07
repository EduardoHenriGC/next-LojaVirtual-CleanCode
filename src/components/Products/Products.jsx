import React from 'react';
import { FcLike } from 'react-icons/fc';
import { BsFillCartCheckFill } from 'react-icons/bs';
import styles from '../../styles/Product/Products.module.css';
import { useProductsContext } from '@/context/ProductsContext';
import Link from 'next/link';


function Products({ 
  idproduto,
  nmproduto, 
  urlimg,
   preco, 
   descricao, 
 }) {
  
  const {
    
    
    handleCartClick,
    handleFavClick,
  } = useProductsContext();
  
  
  return (
   
    <li key={idproduto}>
      <h4>{nmproduto}</h4>
      <img src={urlimg} alt={nmproduto} height="300px" width="300px" />
      <div className={styles.container_preco}>
        <p>${preco}</p>
        <div>
          <BsFillCartCheckFill
            className={styles.icons_cart}
            onClick={() => handleCartClick(idproduto)}
          />
          <FcLike
            className={styles.icons_like}
            onClick={() => handleFavClick(idproduto)}
          />
        </div>
      </div>
      <Link href={`/produtos/${idproduto}`} className={styles.link}>
  Ver mais..
</Link>


    </li>
   
  );
}

export default Products;
