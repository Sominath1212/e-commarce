import { DataContext } from "../context/DataContext";
import { useContext, useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { TiMinus } from "react-icons/ti";
import { toast } from "react-toastify";

function Cart() {
  const { cartItems, addCartItem, removeCartItem } = useContext(DataContext);
  const [Total, setTotal] = useState(0);
  const getTotal = () => {
    let Total = 0;
    cartItems.forEach((element) => {
      Total += element.price;
    });
    return Total;
  };
  useEffect(() => {
    setTotal(getTotal());
  }, [cartItems]);

  return (
    <div>
      {cartItems.length == 0 ? (
        <div className="text-4xl font-bold text-center w-screen h-screen flex items-center justify-center">
          no such cart items is present
        </div>
      ) : (
        <table
          border={1}
          className="min-w-full h-[50%] text-center bg-white shadow-md p-2 rounded-lg border overflow-y-scroll"
        >
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-2 px-4 text-left">ID</th>
              <th className="py-2 px-4 text-left">Product</th>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Price</th>
              <th className="py-2 px-4 text-left">Quantity</th>
              <th className="py-2 px-4 text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            {console.log(cartItems)}

            {cartItems.map((item) => {
              return (
                <tr
                  key={item.id}
                  className={`${item.count == 0 ? "hidden" : ""}`}
                >
                  {/* {console.log(item)} */}
                  <td className="py-2 px-4 text-left">{item?.id}</td>
                  <td className="py-2 px-4 text-left">
                    <img src={item?.product.image} className="w-20 " />
                  </td>
                  <td className="py-2 px-4 text-left">{item?.product.title}</td>
                  <td className="py-2 px-4 text-left">{item.product.price}</td>
                  <td className="py-2 px-4  text-center flex items-center gap-2 relative top-9">
                    <TiMinus
                      className="cursor-pointer hover:text-orange-500"
                      onClick={() =>
                        removeCartItem(item.id, item.product.price)
                      }
                    ></TiMinus>
                    {item?.count}
                    <FaPlus
                      className="cursor-pointer hover:text-orange-500"
                      onClick={() =>
                        addCartItem(
                          item,
                          item.count,
                          item.id,
                          item.product.price
                        )
                      }
                    />
                  </td>
                  <td className="py-2 px-4 text-left">{item.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      <div className="w-full bg-orange-500 flex items-center justify-between h-10 px-30 fixed bottom-0">
        <h1 className="font-bold">Total Bill</h1> ${Total}
        <button
          className="bg-blue-400 text-black p-1 rounded mx-3 "
          onClick={() => {
            toast.success("order placed successfully");
          }}
        >
          Order Now
        </button>
      </div>
    </div>
  );
}

export default Cart;
