import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");

  const [userName, setUserName] = useState("");

  return (
    //   <div classNameName="flex flex-col h-screen bg-pink-50">
    //     <div classNameName=" flex flex-col h-2/3 border border-black m-auto w-1/3 bg-red-800 rounded-3xl">
    //       <h2 classNameName="text-center p-2 font-bold text-white  text-transform:capitalize"></h2>
    //       <form classNameName="flex flex-col border  w-4/5 m-auto rounded-3xl">
    //         <label
    //           htmlFor="email"
    //           classNameName="font-bold p-2 bg-pink-100 rounded-3xl"
    //         >
    //           Email
    //         </label>
    //         <input
    //           type="email"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //           classNameName="p-2 border  rounded-3xl"
    //         />
    //         <label
    //           htmlFor="password"
    //           classNameName="font-bold p-2 bg-pink-100 rounded-3xl"
    //         >
    //           Password
    //         </label>
    //         <input
    //           type="password"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //           classNameName="p-2 rounded-3xl"
    //         />
    //         <Link to="/">
    //           {" "}
    //           <button type="submit" classNameName="bg-white p-2 rounded-3xl">
    //             Log In
    //           </button>
    //         </Link>
    //       </form>
    //     </div>
    //   </div>
    // );
    <div className="flex justify-center items-center h-screen bg-red-900">
      <div className="w-96 p-6 shadow-lg bg-white rounded-md">
        <h1 className="text-3xl block text-center font-semibold">
          <i className="fa-solid fa-user"></i> Login
        </h1>
        <hr className="mt-3" />
        <div className="mt-3">
          <label htmlFor="username" className="block text-base mb-2">
            Username
          </label>
          <input
            type="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            id="username"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder="Enter Username..."
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password" className="block text-base mb-2">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder="Enter Password..."
          />
        </div>
        <Link to="/">
          <button
            type="submit"
            username={userName}
            className="border-2 border-red-800 bg-red-800 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-red-800 font-semibold mt-5"
          >
            <i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Login
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Login;
