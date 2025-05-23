import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
function Navbar() {
  const [isActive, setIsActive] = useState("/");
  return (
    <nav className="flex w-full  justify-between px-20 h-10 shadow-2xs items-center">
      <div>
        <Link to={"/"}>
          <h1
            className={`font-bold text-3xl cursor-pointer ${
              isActive == "/" ? "underline" : ""
            }`}
            onClick={() => setIsActive("/")}
          >
            E-Cart.com
          </h1>
        </Link>
      </div>
      <ul className="flex items-center mx-3 justify-evenly gap-5 ">
        <Link
          to={"/"}
          className={`font-semibold text-2xl ${
            isActive === "/" ? "underline" : ""
          }`}
          onClick={() => setIsActive("/")}
        >
          Home
        </Link>
        <Link
          className={`font-semibold text-2xl ${
            isActive === "products" ? "underline" : ""
          }`}
          onClick={() => setIsActive("products")}
          to={"/products"}
        >
          Products
        </Link>
        <Link
          className={`font-semibold text-2xl ${
            isActive === "cart" ? "text-orange-400" : ""
          }`}
          onClick={() => setIsActive("cart")}
          to={"/cart"}
        >
          <FaCartArrowDown />
        </Link>
      </ul>

      <div className="flex items-center mx-3 justify-evenly gap-5">
        <button>
          <Link
            className={`font-semibold text-2xl ${
              isActive === "login" ? "underline" : ""
            }`}
            onClick={() => setIsActive("login")}
            to={"/login"}
          >
            Login
          </Link>
        </button>
        <button>
          <Link
            className={`font-semibold text-2xl ${
              isActive === "sign-up" ? "underline" : ""
            }`}
            onClick={() => setIsActive("sign-up")}
            to={"/sign-up"}
          >
            Sign Up
          </Link>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
