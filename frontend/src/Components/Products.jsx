import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    try {
      axios.get("https://fakestoreapi.com/products").then((response) => {
        // console.log(response.data);
        setProducts(response.data);
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }, []);
  return (
    <div className="grid grid-cols-4  mx-5">
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="flex items-center justify-evenly  mx-5"
          >
            {/* <img src={product.image}  alt="" /> */}

            <Card product={product} />
          </div>
        );
      })}
    </div>
  );
}

export default Products;
