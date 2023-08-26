import React from 'react';
import { FcLike } from 'react-icons/fc';
import { BsFillCartCheckFill } from 'react-icons/bs';
import styles from '../../styles/Product/Products.module.css';
import ProductItem from '../ProductItem/ProductItem';



function Products({ 
   id,
   nome, 
   imgurl,
   preco, 
   descricao, 
   handleCartClick,
   handleLikeClick,
   HandleModal,
   modal,
   selectedItemId }) {
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
      <a onClick={() => HandleModal(id)} className={styles.link}>
  Ver mais..
</a>
{modal && selectedItemId === id && (
  <ProductItem
    id={id}
    nome={nome}
    imgurl={imgurl}
    preco={preco}
    descricao={descricao}
    HandleModal={HandleModal}
    handleCartClick={handleCartClick}
    handleLikeClick={handleLikeClick}
  />
)}

    </li>
   
  );
}

export default Products;
