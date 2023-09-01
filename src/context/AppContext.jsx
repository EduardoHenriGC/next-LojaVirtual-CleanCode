import { ProductsProvider } from "@/context/ProductsContext";
import { SessionProvider } from "next-auth/react";

export const AppProvider = ({children,session}) => {



    return (
    <SessionProvider session={session}>
      <ProductsProvider>
    
        
  {children}



    
    </ProductsProvider>
    </SessionProvider>
    )
}