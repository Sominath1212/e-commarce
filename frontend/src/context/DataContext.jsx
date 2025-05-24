
import { createContext ,useState } from "react";
import { toast } from "react-toastify";
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  // const cartItems = [];
  const [cartItems, setCartItems] = useState([]);

  const addCartItem = (product, count, id, price) => {
    // console.log(id);

    const ispresent = cartItems.some((item) => item.id === id);
    console.log(ispresent);
    if (ispresent) {
      // cartItems.pop(product);
      cartItems.forEach((element) => {
        if (element.id === id) {
          element.count++;
          element.price = element.count * price;
        }
      });
    } else {
      // cartItems.push();
      setCartItems((prev) => [...prev, { id, product, count, price }]);
    }

    console.log(cartItems);

    // cartItems.map((item) => console.log(item));

    toast.success("item added");
  };
  const removeCartItem = (id, price) => {
    cartItems.forEach((element) => {
      if (element.id == id) {
        element.count--;
        element.price = element.price - price;
        toast.success("item remove");
      }
    });
  };

  return (
    <DataContext.Provider value={{ cartItems, addCartItem, removeCartItem ,setCartItems}}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
