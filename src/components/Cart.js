import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  //   console.log(store);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center p-5 bg-pink-50 h-screen ">
      <div className="flex justify-around ">
        {" "}
        <h1 className="text-2xl font-bold py-2">Cart</h1>
        <button
          className="text-white bg-red-600 rounded-lg p-2 m-2"
          onClick={handleClearCart}
        >
          Clear cart
        </button>
      </div>
      <div className="w-7/12 m-auto border border-gray-400">
        {cartItems.length === 0 && (
          <h1>Cart is empty.Add items to the cart.</h1>
        )}
        <CartItem items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
