import React from 'react';
import Link from 'next/link';



export default function CartItem({cartItems, handleRemoveCart}) {
  

  return (
    <div>
      <h2>Itens do carrinho</h2>
      {cartItems.length === 0 ? (
        <p>Nenhum item no carrinho ainda.</p>
      ) : (
        <ul>
          {cartItems.map(({ 
            id, 
            nome,
            imgurl, 
            preco }) => (
            <li key={id}>
              <h4>{nome}</h4>
              <img src={imgurl} alt={nome} height="150px" width="150px" />
              <p>${preco}</p>
              <button
                
                onClick={() => handleRemoveCart(id)}
              >
                Remover
              </button>
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
