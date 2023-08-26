import React from "react";
import styles from "../../styles/Product/Product.module.css";
import { FcLike } from 'react-icons/fc';
import { BsFillCartCheckFill } from 'react-icons/bs';


function ProductItem({ 
   id,
   nome,
   imgurl, 
   preco, 
   descricao,
   HandleModal, 
   handleCartClick, 
   handleLikeClick}) {
 

  return (
    <div className={styles.modal}>
    <div className={styles.modalcontent}>
    <div className={styles.container}>
     <div className={styles.btnContainer}>

      <a onClick={() => HandleModal()} >voltar</a>
     </div>
        
      <div key={id}>
        <h1 className={styles.title}>{nome}</h1>
        <div className={styles.img}>
          <img src={imgurl} alt={nome} />
        </div>
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
      </div>
      <div className={styles.ContainerDescricao}>
        <h3 className={styles.h3}>Descrição</h3>
        <div className={styles.descricao}>{descricao}</div>
      </div>
    </div>
     </div>
      </div>
  );
}
export default ProductItem;