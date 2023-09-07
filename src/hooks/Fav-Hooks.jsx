import { getSession } from "next-auth/react";
import api from "@/data/api";
import FavoritesItem from "@/components/favorites/favoritesItem";

export default function FavHooks(){

    async function handleLikeClick(produtoid, context) {

        const session = await getSession(context);
        const userEmail = session?.user.email;
      
        await api
          .post("/favorites", {
            usuarioid: userEmail,
            idproduto,
          })
          .then(() => toast.success("produto adicionado aos favoritos"));
      }



    return <FavoritesItem></FavoritesItem>
}