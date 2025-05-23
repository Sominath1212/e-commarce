import axios from "axios";
import { useState } from "react";
function Products() {
  const [products, setProducts] = useState([]);
  try {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  } catch (error) {
    console.log(error);
  }
  return (
    <div>
      {products.map((product) => {
        return <div>{product.id}</div>;
      })}
    </div>
  );
}

export default Products;
