import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-red-500 shadow-lg">
      <div className="logo-container">
        <img className="h-28 p-2" src={LOGO_URL} alt="" />
      </div>
      <div className=" py-11">
        <ul className="flex">
          <li className="px-2 text-white hover:text-black hover:bg-white rounded-2xl">
            <Link to="/"> Home</Link>
          </li>
          <li className="px-2 text-white hover:text-black hover:bg-white rounded-2xl">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2 text-white hover:text-black hover:bg-white rounded-2xl">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2 text-white hover:text-black hover:bg-white rounded-2xl">
            <Link to="/grocery"> Grocery</Link>
          </li>

          <li className="px-2 text-white hover:text-black hover:bg-white rounded-2xl">
            Cart
          </li>
          <button
            className="login"
            onClick={() => {
              loginBtn == "login"
                ? setLoginBtn("logout")
                : setLoginBtn("login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
