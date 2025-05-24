import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";
import { app } from "../config/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);
import { useNavigate } from "react-router-dom";

const login = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log(user.user?.accessToken);

    console.log(user.user?.email);
    // console.log(user);
    localStorage.setItem("token", user?.user?.accessToken);
    localStorage.setItem("Email", user?.user?.email);
    toast.success("logined-in succsessfully");
  } catch (error) {
    toast.error("unable to login");
    throw error;
  }
};
const signin = async (email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user);
    toast.success("register successfully");
  } catch (e) {
    console.log(e);
    toast.error("firebase error occurs");
  }
};
const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("Email");
};
const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ login, signin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
