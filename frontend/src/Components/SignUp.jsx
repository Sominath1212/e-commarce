import { useContext, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/UserAuth";
function SignUp() {
  const navigate = useNavigate();
  const { signin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signin(email, password);
    console.log(email, password);
    
    navigate("/login");
  };
  return (
    <div
      className="w-full h-[85vh] bg-gray-200 flex flex-col items-center justify-center
  "
    >
      <h2 className="font-semibold text-4xl my-2">SignUp</h2>
      <form
        onSubmit={handleSubmit}
        className="shadow-2xl flex flex-col mt-2 items-center p-3 rounded-2xl justify-center w-[35%] gap-2"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="outline-none border cursor-pointer rounded w-full py-3 text-center"
          placeholder="Email"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="outline-none border rounded w-full py-3 text-center"
          placeholder="Password"
        />
        <button className=" border rounded-2xl font-bold px-3 py-2 m-2 bg-orange-400">
          SignUp
        </button>
        <Link to={"/login"}> login</Link>
      </form>
    </div>
  );
}

export default SignUp;
