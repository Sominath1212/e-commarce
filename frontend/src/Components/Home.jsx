import React from "react";
import { Link } from "react-router-dom";
import Products from "./Products";

export default function Home() {
  return (
    <div>
      <div>
        <div className="   w-full sm:h-[50vh] h-[40vh]   flex flex-col items-center justify-center sm:relative sm:pt-10">
          <Link to="/">
            <div>
              <h1 className="flex  drop-shadow-lg text-3xl font-bold  cursor-pointer items-center justify-center">
                E-Cart.com
              </h1>
            </div>
          </Link>

          <p className="sm:text-xl text-center text-black mt-4 mx-3">
            "One cannot think well, love well, sleep well, if one has not dined
            well."
          </p>
          <Link to="/products">
            <button className="font-bold border bg-[#FF6600] hover:scale-110 duration-700 transition-all text-black px-2 relative self-center py-1 rounded-lg mx-auto  top-7">
              Get started
            </button>
          </Link>
        </div>
      </div>

      <Products />
      
    </div>
  );
}
