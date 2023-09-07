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
            {cartItems.map(({ idproduto, nmproduto, urlimg, preco }) => (
              <li className={styles.containerList} key={idproduto}>
                <h4>{nmproduto}</h4>
                <div className={styles.img}>
                <img  src={urlimg} alt={nmproduto}/>
                </div>
                <div className={styles.container_preco}>
                <p>
                  R${preco} 
                  </p>
                  <div>
                  <AiOutlineMinus className={styles.btnhandle}  onClick={() => handleAmountLess(idproduto)}>diminuir</AiOutlineMinus>
                  <span>{quantidades[idproduto]}</span>
                  <AiOutlinePlus className={styles.btnhandle}  onClick={() => handleAmountMore(idproduto)}>aumentar</AiOutlinePlus>
                </div>
              <AiFillDelete
                  className={styles.removeButton}
                  onClick={() => handleRemoveCart(idproduto)}
                />
                  </div>
              </li>
            ))}
          </ul>
          <p>Total: ${totalValue.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}
