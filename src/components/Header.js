import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import UserContext from "../utils/UserContext";
import Login from "./Login";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const [userName, setUserName] = useState("User");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  // console.log(data);
  //subscribing to store using useselector.
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  return (
    <div className="flex justify-between bg-red-500 shadow-lg">
      <div className="logo-container mx-4 px-6">
        <img className="h-28 p-2" src={LOGO_URL} alt="" />
      </div>
      <div className=" py-11 mx-4 px-6">
        <ul className="flex">
          <li className="px-2  text-white text-lg hover:text-black hover:bg-white active:bg-red-700 active:text-white rounded-2xl font-medium">
            <Link to="/"> Home</Link>
          </li>
          <li className="px-2  text-white text-lg hover:text-black hover:bg-white active:bg-red-700 active:text-white rounded-2xl font-medium">
            <Link to="/about">About Us</Link>
          </li>
          {/* <li className="px-2  text-white hover:text-black hover:bg-white active:bg-red-700 active:text-white rounded-2xl font-bold">
            <Link to="/contact">Contact Us</Link>
          </li> */}
          <li className="px-2  text-white text-lg hover:text-black hover:bg-white active:bg-red-700 active:text-white rounded-2xl font-medium">
            <Link to="/grocery"> Grocery</Link>
          </li>

          <li className="px-2  text-white text-lg hover:text-black hover:bg-white active:bg-red-700 active:text-white rounded-2xl font-medium">
            <Link to="/cart"> Cart - ({cartItems.length} items)</Link>
          </li>
          <Link to="/login">
            <button
              className="px-2 w-16  text-white text-lg hover:text-black hover:bg-white active:bg-red-700 active:text-white rounded-2xl font-medium"
              onClick={() => {
                loginBtn == "Login"
                  ? setLoginBtn("Logout")
                  : setLoginBtn("Login");
              }}
            >
              {loginBtn}
            </button>
          </Link>
          <li className="px-2 text-lg text-white rounded-2xl  font-medium">
            Welcome,{userName}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
