import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, password);
  };
  return (
    <div
      className="w-full h-[85vh] bg-gray-200 flex flex-col items-center justify-center
  "
    >
      <h2 className="font-semibold text-4xl my-2">Login</h2>
      <form
        onSubmit={handleSubmit}
        className="border flex flex-col mt-2 items-center p-3 rounded-2xl justify-center w-[35%] gap-2"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="outline-none py-3 text-center"
          placeholder="Email"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="outline-none py-3 text-center"
          placeholder="Password"
        />
        <button className=" border rounded-2xl font-bold px-3 py-2 m-2 bg-orange-400">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
