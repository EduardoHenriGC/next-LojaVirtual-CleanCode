import React from 'react';
import Head from 'next/head';
import styles from '../../styles/Product/Products.module.css';
import ProductItem from './ProductItem';

function ProductListView({ products, favoriteItems, handleCart, handleLikeClick }) {
  return (
    <>
      <Head>
        <title>Página dos Produtos</title>
      </Head>

      <div>
        <h2 className={styles.title}>Lista de produtos</h2>
        <ul className={styles.jogoslist}>
          {products.map(({ id, nome, imgurl, preco }) => (
            <ProductItem
              key={id}
              id={id}
              nome={nome}
              imgurl={imgurl}
              preco={preco}
              isLiked={favoriteItems.some((favItem) => favItem.id === id)}
              handleCart={handleCart}
              handleLikeClick={handleLikeClick}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProductListView;
