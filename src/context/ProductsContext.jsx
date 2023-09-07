import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useSession } from "next-auth/react";
import api from '@/data/api';


function setCartItemsToLocalStorage(updatedCart) {
  localStorage.setItem("cartItems", JSON.stringify(updatedCart));
}

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [products, setProducts] = useState([]);

  const { data: session } = useSession();

  //FUNCTION TO BRING ALL PRODUCTS
  const fetchProducts = useCallback(async () => {
    try {
      const res = await api.get("/products"); // Use Axios to fetch products
      setProducts(res.data); // Assuming the response data is an array
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);


    // function handle cart item
    const handleItemAction = useCallback((id, itemList, setItemList) => {
    const item = products.find((product) => product.idproduto === id);
    if (item && !itemList.some((item) => item.idproduto === id)) {
      setItemList([...itemList, item]);
    }
  }, [products]);

  const handleCartClick = useCallback((id) => {
    handleItemAction(id, cartItems, setCartItems);
  }, [cartItems, handleItemAction]);

  //FUNCTION TO REMOVE ITEM FROM CART LOCALSTORAGE

  const handleRemoveCart = useCallback((id) => {
    const updatedCart = cartItems.filter((item) => item.idproduto !== id);
    setCartItems(updatedCart);
    setCartItemsToLocalStorage(updatedCart);
  }, [cartItems]);


  // Function to fetch data from API bookmarks without updating the state
  const fetchFavoritesData = useCallback(async () => {
    try {
      if (!session) {
        return [];
      }

      const userEmail = session.user.email;

      

      const res = await api.get(`favorites?q=${userEmail}`); // Use Axios to fetch favorites
      return res.data; // Assuming the response data is an array
    } catch (error) {
      console.error('Error fetching favorites:', error);
      return [];
    }
  }, [session]);

// Function to fetch data from API bookmarks and update state
const fetchFavorites = useCallback(async () => {
  try {
    if (!session) {
      return;
    }

    const userEmail = session.user.email;

    

    const res = await api.get(`favorites?q=${userEmail}`); // Use Axios to fetch favorites
    setFavoriteItems(res.data); // Assuming the response data is an array
  } catch (error) {
    console.error('Error fetching favorites:', error);
  }
}, [session]);

// Effect that calls fetchFavorites function when session or fetchFavorites function changes
useEffect(() => {
  fetchFavorites();
}, [session, fetchFavorites]);




//FUNCTION TO REMOVE THE ITEM LOCALLY AND THEN REMOVE IT FROM THE DATABASE
const handleFavClickApi = useCallback(async (idproduto, userEmail) => {
  try {
    //Check if the item is already in favorites
    if (favoriteItems.some((item) => item.idproduto === idproduto)) {
      console.log("The item is already in favorites.");
      return;
    }

    // Continue logic to add item to favorites
    const item = products.find((product) => product.idproduto === idproduto);

    if (item) {
      // Atualizar localmente antes de fazer uma solicitação
      const updatedFavoriteItems = [...favoriteItems, item];
      setFavoriteItems(updatedFavoriteItems);

      // Update locally before making a request
      await api.post("favorites", {
        produtoid: idproduto,
        usuarioid: userEmail,
      });

      // Update again after a successful reply
      const updatedFavoritesData = await fetchFavoritesData();
      setFavoriteItems(updatedFavoritesData);
    } else {
      console.log("Item não encontrado nos produtos.");
    }
  } catch (error) {
    console.error('Erro ao adicionar favorito:', error);
  }
}, [session, favoriteItems, products, fetchFavoritesData]);


const handleFavClick = useCallback((idproduto) => {
    if (session) {
      const userEmail = session.user.email;
      handleFavClickApi(idproduto, userEmail); 
    } else {
      console.log("err")
    }
  }, [session, handleFavClickApi]);


  //FUNCTION TO REMOVE AN ITEM FROM FAVORITES
  const handleRemoveFav = useCallback(async (id) => {
    try {
      if (!session) {
        return;
      }
     
      const response = await api.delete(`favorites${id}`);
  
      if (response.status === 204) {
        console.log("Item excluído com sucesso");
  
        setFavoriteItems((prevFavoriteItems) =>
          prevFavoriteItems.filter((item) => item.id !== id)
        );
      }
    } catch (error) {
      console.error('Erro ao remover favorito:', error);
    }
  }, [session]);

  useEffect(() => {
    handleRemoveFav();
  }, [favoriteItems, handleRemoveFav]);

  const contextValue = {
    products,
    favoriteItems,
    cartItems,
    handleCartClick,
    handleFavClick,
    handleRemoveCart,
    handleRemoveFav
  };

  return <ProductsContext.Provider value={contextValue}>{children}</ProductsContext.Provider>;
}

export function useProductsContext() {
  return useContext(ProductsContext);
}
