import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/UserAuth";

function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    // console.log(email, password);
    navigate("/");
  };
  return (
    <div
      className="w-full h-[85vh] bg-gray-200 flex flex-col items-center justify-center
  "
    >
      <h2 className="font-semibold text-4xl my-2">Login</h2>
      <form
        onSubmit={handleSubmit}
        className="border-1 flex flex-col mt-2 items-center p-3 bg-white rounded-2xl justify-center w-[35%] gap-2"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="outline-none border rounded w-full py-3 text-center"
          placeholder="Email"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="outline-none border rounded w-full py-3 text-center"
          placeholder="Password"
        />
        <button className=" border rounded-2xl font-bold cursor-pointer px-3 py-2 m-2 bg-orange-400">
          Login
        </button>

        <Link to={"/sign-up"}> sign-in</Link>
      </form>
    </div>
  );
}

export default Login;
