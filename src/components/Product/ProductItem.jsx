import React from 'react';
import Link from 'next/link';
import { FcLike } from 'react-icons/fc';
import { BsFillCartCheckFill } from 'react-icons/bs';
import styles from '../../styles/Product/Products.module.css';



function ProductItem({ id, nome, imgurl, preco, isLiked, handleCart, handleLikeClick }) {
  return (
    <li key={id}>
      <h4>{nome}</h4>
      <img src={imgurl} alt={nome} height="300px" width="300px" />
      <div className={styles.container_preco}>
        <p>${preco}</p>
        <div>
          <BsFillCartCheckFill
            className={styles.icons_cart}
            onClick={() => handleCart(id)}
          />
          <FcLike
            className={`${styles.icons_like} ${isLiked ? styles.liked : ''}`}
            onClick={() => handleLikeClick(id)}
          />
        </div>
      </div>
      <Link className={styles.link} href={`/produtos/${id}`}>
        Ver mais..
      </Link>
    </li>
  );
}

export default ProductItem;
