
import ProductList from "@/hooks/Product-Hooks"

const API_URL = 'http://localhost:3000/api/teste';

export async function getStaticProps() {
    // Fetch products data from the API
    const res = await fetch(API_URL);
    const products = await res.json();
   
  
    return {
      props: { products },
    };
  }

export default  function ProductPage({products}){

    return (

        <ProductList products={products}/>

    )
}