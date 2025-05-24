import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { DataContext } from "../context/DataContext";
import { AuthContext } from "../context/UserAuth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const { cartItems } = useContext(DataContext);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const prdct = cartItems.length;

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
          className={`font-semibold text-2xl flex  ${
            isActive === "cart" ? "text-orange-400" : ""
          }`}
          onClick={() => setIsActive("cart")}
          to={"/cart"}
        >
          {cartItems.length ? (
            <p className="bg-orange-600 relative w-2 rounded-full h-2 left-7">
              {}
            </p>
          ) : (
            ""
          )}
          <FaCartArrowDown />
        </Link>
      </ul>

      {localStorage.getItem("token") != undefined ? (
        <div className="flex  items-center justify-center gap-5">
          {" "}
          <p>{localStorage.getItem("Email")}</p>
          <MdLogout
            onClick={() => {
              logout();
              navigate("/login");
            }}
            className="cursor-pointer"
          ></MdLogout>
        </div>
      ) : (
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
      )}
    </nav>
  );
}

export default Navbar;
