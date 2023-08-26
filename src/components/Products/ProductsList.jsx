import React from 'react';
import Head from 'next/head';
import styles from '../../styles/Product/Products.module.css';
import Products from './Products';

function ProductsList({ 
    products,
    handleCartClick,
    handleLikeClick, 
    HandleModal,
    modal,
    selectedItemId }) {
  return (
    <>
      <Head>
        <title>Página dos Produtos</title>
      </Head>

      <div>
        <h2 className={styles.title}>Lista de produtos</h2>
        <ul className={styles.jogoslist}>
          {products.map(({ id, nome, imgurl, preco,descricao }) => (
            <Products
              key={id}
              id={id}
              nome={nome}
              imgurl={imgurl}
              preco={preco}
              descricao={descricao}
              HandleModal={HandleModal}
              modal={modal}
              selectedItemId={selectedItemId}
              handleCartClick={handleCartClick}
              handleLikeClick={handleLikeClick}
              
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProductsList;
