import React, { createContext, useContext, useState, useEffect } from 'react';

//pega os item do carrinho do localstorage e se nao tiver nada retorna um array vazio.
function getStoredCart() {
  const storedCart = localStorage.getItem('cartItems');
  return storedCart ? JSON.parse(storedCart) : [];
}

//remove um item do carrinho, e tras os restantes.. ** ele atualiza o carrinho trazendo os itens diferente do que foi excluido.
function removeCartFromLocalStorage(updatedCart) {
  localStorage.setItem('cartItems', JSON.stringify(updatedCart));
}

//pega os item do carrinho do localstorage e se nao tiver nada retorna um array vazio.
function getStoredFavorites() {
  const storedFavorites = localStorage.getItem('favoriteItems');
  return storedFavorites ? JSON.parse(storedFavorites) : [];
}

//remove um item do favoritos, e tras os restantes.. ** ele atualiza o favoritos trazendo os itens diferente do que foi excluido.
function removeFavoriteFromLocalStorage(updatedFavorites) {
  localStorage.setItem('favoriteItems', JSON.stringify(updatedFavorites));
}

const ProductsContext = createContext();



export function ProductsProvider({ children }) {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

//faz o fetch de todos os produtos e armazena no state "products"
  useEffect(() => {
    
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/teste");
        const productsData = await res.json();
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  
    useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteItems');
    if (storedFavorites) {
      setFavoriteItems(JSON.parse(storedFavorites));
    }

    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    setCartItems(getStoredCart());
  }, []);

  useEffect(() => {
    setFavoriteItems(getStoredFavorites());
  }, []);

  // função para dar like ou add aos favoritos// recebe como parametro ID, a variavel e a função do state.
  const handleItemAction = (id, itemList, setItemList) => {
    const item = products.find((product) => product.id === id);
    if (item && !itemList.some((item) => item.id === id)) {
      setItemList([...itemList, item]);
    }
  };
  
 const handleLikeClick = (id) => {
    handleItemAction(id, favoriteItems, setFavoriteItems);
  };

  const handleCartClick = (id) => {
    handleItemAction(id, cartItems, setCartItems);
  };
  
 //função para remover o item do carrinho e tambem do localstorage

  const handleRemoveCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    removeCartFromLocalStorage(updatedCart);
  };
 
   //função para remover o item do favoritos e tambem do localstorage

  const handleRemoveFavorite = (id) => {
    const updatedFavorites = favoriteItems.filter((item) => item.id !== id);
    console.log(updatedFavorites)
    setFavoriteItems(updatedFavorites);
    removeFavoriteFromLocalStorage(updatedFavorites);
  };

  
  const contextValue = {
    products,
    favoriteItems,
    cartItems,
    handleCartClick,
    handleLikeClick,
    handleRemoveCart,
    handleRemoveFavorite
  };

  return <ProductsContext.Provider value={contextValue}>{children}</ProductsContext.Provider>;
}

export function useProductsContext() {
  return useContext(ProductsContext);
}
