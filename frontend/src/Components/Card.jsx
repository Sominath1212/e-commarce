import { CiSquarePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { useContext } from "react";
export default function Card({ product }) {
  const { addCartItem } = useContext(DataContext);
  const addItem = () => {
    addCartItem(product, 1, product.id, product.price);
  };
  return (
    <div className="min-w-40 min-h-60  flex flex-col items-center justify-center shadow-3xl shadow-gray-600 border rounded-2xl px-3 m-3 cursor-pointer hover:scale-105 transition-all duration-700">
      <Link to={`/cartpage/${product.id}`}>
        <img src={product.image} alt="" className="w-20" />
      </Link>

      <CiSquarePlus
        onClick={addItem}
        className="relative left-15 bottom-35 text-2xl hover:text-orange-400"
      />
    </div>
  );
}
