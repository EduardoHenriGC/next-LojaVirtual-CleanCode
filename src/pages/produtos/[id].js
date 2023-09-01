import React from "react";
import styles from "../../styles/Product/Product.module.css";
import { FcLike } from 'react-icons/fc';
import { BsFillCartCheckFill } from 'react-icons/bs';
import axios from "axios";
import { useProductsContext } from "@/context/ProductsContext";






export default function ProductPage({ product }) {

  const {handleCartClick,handleLikeClick} = useProductsContext();
  return (
    <div className={styles.container}>
 
    <h1 className={styles.title}>{product.nome}</h1>
    <img className={styles.img} src={product.imgurl}/>
    <div className={styles.container_preco}>
        <p>${product.preco}</p>
        <div>
          <BsFillCartCheckFill
            className={styles.icons_cart}
            onClick={() => handleCartClick(product.id)}
          />
          <FcLike
            className={styles.icons_like}
            onClick={() => handleLikeClick(product.id)}
          />
        </div>
      </div>

     
    </div>
  );
}

export async function getServerSideProps(context) {

  const { params } = context;
  const id = params.id;

  const res = await axios.get(`http://localhost:3000/api/teste?id=${id}`);
  const product = await res.data;

  return {
    props: { product },
  };
}