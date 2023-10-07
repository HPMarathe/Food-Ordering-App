import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  //   console.log(store);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center p-5 bg-pink-50 min-h-screen ">
      {cartItems.length != 0 && (
        <div className="flex justify-around ">
          {" "}
          <h1 className="text-2xl font-bold py-2">Cart</h1>
          <button
            className="text-white bg-red-600 rounded-lg p-2 m-2 hover:bg-transparent hover:text-red-800 font-semibold border border-red-500"
            onClick={handleClearCart}
          >
            Clear cart
          </button>
        </div>
      )}
      <div
        className={`w-7/12 m-auto  ${
          cartItems.length != 0 ? "border border-gray-400" : null
        }`}
      >
        {cartItems.length === 0 && (
          <div className=" mt-7 pt-7  ">
            <img
              className="m-auto h-80 p-4"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
              alt=""
            />
            <h2 className="font-bold text-2xl p-4">Your cart is Empty.</h2>
            <p className="p-2 mb-2 font-medium">
              You can go to home page to view more restaurants
            </p>
            <Link
              to="/"
              className="text-white bg-red-600 py-2 px-4   text-transform: uppercase font-semibold rounded-3xl hover:bg-transparent hover:text-red-800 border border-red-500 "
            >
              See Restaurants near you
            </Link>
          </div>
        )}
        <CartItem items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
