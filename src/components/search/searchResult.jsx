import Products from "@/components/Products/Products";
import styles from "@/styles/Product/Products.module.css"



const SearchResult = ({searchResults}) => {
 
return   <div>
  <h2 className={styles.title}>Lista de produtos</h2>
  <ul className={styles.jogoslist}>
    {searchResults.map(({ idproduto, nmproduto, urlimg, preco,descricao }) => (
      <Products
        key={idproduto}
        idproduto={idproduto}
        nmproduto={nmproduto}
        urlimg={urlimg}
        preco={preco}
        descricao={descricao}
       
        
      />
    ))}
  </ul>
</div>;
};

export default SearchResult;


