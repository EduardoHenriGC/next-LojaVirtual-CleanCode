import { React, useState, useEffect } from 'react';
import CartItem from '@/components/cart/cartItem'; // Importe o componente CartItem
import { useProductsContext } from '@/context/ProductsContext';

export default function CartHooks() {
  const { handleRemoveCart, cartItems } = useProductsContext();

  // Inicializar o estado quantidades com 1 para cada item no carrinho
  const initialQuantities = cartItems.reduce((quantities, item) => {
    quantities[item.id] = 1;
    return quantities;
  }, {});

  const [quantidades, setQuantidades] = useState(initialQuantities);
  const [totalValue, setTotalValue] = useState(0); // Estado para rastrear o valor total

  // Atualizar o valor total sempre que as quantidades mudarem
  useEffect(() => {
    let newTotalValue = 0;
    cartItems.forEach((item) => {
      newTotalValue += item.preco * (quantidades[item.id] || 0);
    });
    setTotalValue(newTotalValue);
  }, [quantidades, cartItems]);

  // Função para aumentar a quantidade de um item específico
  function handleAmountMore(id) {
    setQuantidades((prevQuantidades) => ({
      ...prevQuantidades,
      [id]: prevQuantidades[id] + 1,
    }));
  }

  // Função para diminuir a quantidade de um item específico
  function handleAmountLess(id) {
    if (quantidades[id] > 1) {
      setQuantidades((prevQuantidades) => ({
        ...prevQuantidades,
        [id]: prevQuantidades[id] - 1,
      }));
    }
  }

  return <CartItem handleRemoveCart={handleRemoveCart} cartItems={cartItems} handleAmountMore={handleAmountMore} handleAmountLess={handleAmountLess} quantidades={quantidades} totalValue={totalValue} />;
}
