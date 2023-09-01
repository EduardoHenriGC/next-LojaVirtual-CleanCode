import styles from "@/styles/cart/cart.module.css"
import { AiOutlineMinus, AiOutlinePlus,AiFillDelete } from 'react-icons/ai';



export default function CartItem({handleAmountMore, handleAmountLess, totalValue, quantidades, handleRemoveCart, cartItems}) {
  


  return (
    <div className={styles.container}>
      <h2>Itens do carrinho</h2>
      {cartItems.length === 0 ? (
        <p>Nenhum item favorito ainda.</p>
      ) : (
        <div>
          <ul className={styles.Content}>
            {cartItems.map(({ id, nome, imgurl, preco }) => (
              <li className={styles.containerList} key={id}>
                <h4>{nome}</h4>
                <div className={styles.img}>
                <img  src={imgurl} alt={nome}/>
                </div>
                <div className={styles.container_preco}>
                <p>
                  R${preco} 
                  </p>
                  <div>
                  <AiOutlineMinus className={styles.btnhandle}  onClick={() => handleAmountLess(id)}>diminuir</AiOutlineMinus>
                  <span>{quantidades[id]}</span>
                  <AiOutlinePlus className={styles.btnhandle}  onClick={() => handleAmountMore(id)}>aumentar</AiOutlinePlus>
                </div>
              <AiFillDelete
                  className={styles.removeButton}
                  onClick={() => handleRemoveCart(id)}
                />
                  </div>
              </li>
            ))}
          </ul>
          <p>Total: ${totalValue}</p>
        </div>
      )}
    </div>
  );
}
