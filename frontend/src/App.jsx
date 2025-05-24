import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Products from "./Components/Products";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Footer from "./Components/Footer";
import CartPage from "./Components/CartPage";
import { ToastContainer } from "react-toastify";
import DataProvider from "./context/DataContext";
import AuthProvider from "./context/UserAuth";
import ProtectedRoute from "./Components/ProtectedRoute";
function App() {
  return (
    <Router>
      <AuthProvider>
        <DataProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/cart" element={<Cart />} />
            </Route>
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/cartpage:/id" element={<CartPage />} />

            {/* 
             <Route element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/success" element={<Success />} />
              <Route path="/create-gig" element={<CreateGig />} />
              <Route path="/forget" element={<ForgetPassword />} />
              <Route path="/user/:id" element={<UserProfilePage />} />
              <Route path="/gig/:id" element={<GigCart />} />
              <Route path="/review/:id" element={<Review />} />
            </Route> */}
          </Routes>
          {/* <Footer></Footer> */}
          <ToastContainer />
        </DataProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
